import crypto from 'crypto';
import { omit } from 'lodash';
import { User } from '../../models';
import { successResponse, errorResponse, uniqueId } from '../../helpers';

const { AVAILABLE_SEND_EMAILS, BASIC_EMAIL_TEMPLATE, URL_CLIENT } = process.env;

const SendgridService = require('./../../services/sendgrid');
const AuthService = require('./../../services/auth');
const bcrypt = require('bcryptjs');

export const register = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    const user = await User.scope('withSecretColumns').findOne({
      where: { email },
    });
    if (user) {
      throw new Error('User already exists with same email');
    }
    const reqPass = crypto.createHash('md5').update(password).digest('hex');
    const payload = {
      email,
      firstName,
      lastName,
      password: reqPass,
      isVerified: false,
      verifyToken: uniqueId(),
    };

    const newUser = await User.create(payload);

    const token = AuthService.generateJWT(newUser);

    /*if (AVAILABLE_SEND_EMAILS) {
            SendgridService.sendEmailWithTemplate(
                newUser.firstName,
                BASIC_EMAIL_TEMPLATE,
            );
        }*/
    return successResponse(req, res, {
      user: omit(newUser.dataValues, [
        'profilePic',
        'password',
        'verifyToken',
        'tokenPassRecovery',
        'tokenPassRecoveryDate',
        'isVerified',
        'updatedAt',
        'createdAt',
      ]),
      token,
    });
  } catch ({ message }) {
    return errorResponse(req, res, message, 403);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.scope('withSecretColumns').findOne({
      where: { email: req.body.email },
    });
    if (!user) {
      throw new Error('Incorrect Email Id/Password');
    }
    const reqPass = crypto
      .createHash('md5')
      .update(req.body.password || '')
      .digest('hex');
    if (reqPass !== user.password) {
      throw new Error('Incorrect Email Id/Password');
    }
    const token = AuthService.generateJWT(user);

    return successResponse(req, res, {
      user: omit(user.dataValues, [
        'profilePic',
        'password',
        'verifyToken',
        'tokenPassRecovery',
        'tokenPassRecoveryDate',
        'isVerified',
        'updatedAt',
        'createdAt',
      ]),
      token,
    });
  } catch ({ message }) {
    return errorResponse(req, res, message, 403);
  }
};

export const recoverPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const query = {
      where: { email },
    };
    const user = await User.findOne(query);

    if (user) {
      const tokenPassRecovery = bcrypt.genSaltSync().replace(/[^a-zA-Z0-9-_]/g, '');

      const newFildsTouser = {
        tokenPassRecovery,
        tokenPassRecoveryDate: new Date(),
      };

      await user.update(newFildsTouser);

      if (AVAILABLE_SEND_EMAILS) {
        const dynamicTemplateData = {
          displayName: user.name,
          link: `${URL_CLIENT}/reset-password?token_pass_recovery=${user.tokenPassRecovery}`,
        };

        SendgridService.sendEmailWithTemplate(
          user.email,
          BASIC_EMAIL_TEMPLATE,
          dynamicTemplateData,
        );
      }

      return successResponse(req, res, {});
    } else {
      return errorResponse(req, res, 'User not found', 401);
    }
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { token, password } = req.body;
    const user = await User.scope('withSecretColumns').findOne({
      where: { tokenPassRecovery: token },
    });

    if (user) {
      const newPass = crypto.createHash('md5').update(password).digest('hex');

      await User.update({ password: newPass }, { where: { id: user.id } });
    }

    return successResponse(req, res, {});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

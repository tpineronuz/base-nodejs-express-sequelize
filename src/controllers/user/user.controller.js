import crypto from 'crypto';
import { omit } from 'lodash';
import { User, Nft, Trait } from '../../models';
import { successResponse, errorResponse, uniqueId } from '../../helpers';
import RedisService from '../../services/redis';

const SendgridService = require('./../../services/sendgrid');
const AuthService = require('./../../services/auth');
const bcrypt = require('bcryptjs');

export const allUsers = async (req, res) => {
  try {
    const page = req.params.page || 1;
    const limit = 2;
    const users = await User.findAndCountAll({
      order: [
        ['createdAt', 'DESC'],
        ['firstName', 'ASC'],
      ],
      offset: (page - 1) * limit,
      limit,
    });
    return successResponse(req, res, { users });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const profile = async (req, res) => {
  try {
    const { userId } = req.user;
    const user = await User.findOne({ where: { id: userId } });
    return successResponse(req, res, { user });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const changePassword = async (req, res) => {
  try {
    const { userId } = req.user;
    const user = await User.scope('withSecretColumns').findOne({
      where: { id: userId },
    });

    const reqPass = crypto.createHash('md5').update(req.body.oldPassword).digest('hex');
    if (reqPass !== user.password) {
      throw new Error('Old password is incorrect');
    }

    const newPass = crypto.createHash('md5').update(req.body.newPassword).digest('hex');

    await User.update({ password: newPass }, { where: { id: user.id } });
    return successResponse(req, res, {});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

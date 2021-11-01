import { errorResponse } from '../helpers';
const AuthService = require('../services/auth');

const jwt = require('jsonwebtoken');

const apiAuth = async (req, res, next) => {
  if (!(req.headers && req.headers['x-token'])) {
    return errorResponse(req, res, 'Token is not provided', 401);
  }
  const token = req.headers['x-token'];
  try {
    req.user = await AuthService.verifyJWT(token);

    return next();
  } catch (error) {
    return errorResponse(res, 'Incorrect token is provided, try re-login', 401);
  }
};

export default apiAuth;

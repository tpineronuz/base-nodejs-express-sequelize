import jwt from 'jsonwebtoken';
import { User } from '../models';

const { SECRET } = process.env;

class AuthService {
  static generateJWT(user) {
    const token = jwt.sign(
      {
        user: {
          userId: user.id,
          email: user.email,
          createdAt: new Date(),
        },
      },
      SECRET,
    );

    return token;
  }

  static async verifyJWT(token) {
    try {
      const decoded = jwt.verify(token, SECRET);

      if (!decoded.user || !decoded.user.email) {
        throw new Error('Invalid token');
      }

      const user = await User.scope('withSecretColumns').findOne({
        where: { email: decoded.user.email },
      });

      if (!user) {
        throw new Error('User is not found in system');
      }

      const reqUser = { ...user.get() };
      reqUser.userId = user.id;

      return reqUser;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = AuthService;

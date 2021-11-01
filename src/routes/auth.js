import express from 'express';
import validate from 'express-validation';
import * as authController from '../controllers/auth/auth.controller';
import * as authValidator from '../controllers/auth/auth.validator';

const router = express.Router();

//= ===============================
// API routes
//= ===============================
/**
 * @api {post} /api/auth/login Login
 * @apiName login
 * @apiGroup Credentials
 *
 * @apiParam {String} email User email
 * @apiParam {String} password User password
 * @apiParamExample {json} Input
 *    {
 *      "email": "john@connor.net",
 *      "password": "123456"
 *    }
 * @apiSuccess {json} user
 * @apiSuccess {String} token Token of authenticated user
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      user: {
 *        "email": "john@connor.net",
 *        "firstName": "John",
 *        "id": 1,
 *        "isAdmin": false
 *        "lastName": "Connor",
 *      },
 *      "token": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
 *    }
 * @apiErrorExample {json} Authentication error
 *    HTTP/1.1 403 Unauthorized
 *    {
 *      "errorMessage":"Incorrect Email Id/Password",
 *      "data": null,
 *      "success":false
 *    }
 */
router.post('/login', validate(authValidator.login), authController.login);

/**
 * @api {post} /api/auth/register Register
 * @apiName register
 * @apiGroup Credentials
 *
 * @apiParam {String} firstName User First Name
 * @apiParam {String} lastName User Last Name
 * @apiParam {String} email User email
 * @apiParam {String} password User password
 * @apiParam {String} repeatPassword User Repeat Password
 * @apiParamExample {json} Input
 *    {
 *        "email": "john@connor.net",
 *        "firstName": "John",
 *        "lastName": "Connor",
 *        "password": "JohnConnor34$$"
 *        "repeatPassword": "JohnConnor34$$"
 *    }
 * @apiSuccess {json} user
 * @apiSuccess {String} token Token of authenticated user
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      user: {
 *        "email": "john@connor.net",
 *        "firstName": "John",
 *        "id": 1,
 *        "isAdmin": false
 *        "lastName": "Connor",
 *      },
 *      "token": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
 *    }
 * @apiErrorExample {json} Authentication error
 *    HTTP/1.1 403 Unauthorized
 *    {
 *      "errorMessage":"Incorrect Email Id/Password",
 *      "data": null,
 *      "success":false
 *    }
 */
router.post('/register', validate(authValidator.register), authController.register);

/**
 * @api {post} /api/auth/recoverPassword Recover Password
 * @apiName recover-password
 * @apiGroup Credentials
 * @apiParam {String} email User email
 * @apiParamExample {json} Input
 *    {
 *        "email": "john@connor.net",
 *    }
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *        "code": 200,
 *        "data": {},
 *        "success": true
 *    }
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 412 Precondition Failed
 *    {
 *       "errorMessage": "User not found",
 *       "data": null,
 *       "success": false
 *    }
 */
router.post(
  '/recoverPassword',
  validate(authValidator.recoverPassword),
  authController.recoverPassword,
);

/**
 * @api {post} /api/auth/resetPassword Reset Password
 * @apiName reset-password
 * @apiGroup Credentials
 * @apiParam {String} password password
 * @apiParam {String} repeatPassword password
 * @apiParam {String} token token
 * @apiParamExample {json} Input
 *    {
 *        "password": "JohnConnor34$$"
 *        "repeatPassword": "JohnConnor34$$"
 *        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
 *    }
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *        "code": 200,
 *        "data": {},
 *        "success": true
 *    }
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 412 Precondition Failed
 *    {
 *       "errorMessage": "token is required",
 *       "data": null,
 *       "success": false
 *    }
 */
router.post('/resetPassword', validate(authValidator.resetPassword), authController.resetPassword);

module.exports = router;

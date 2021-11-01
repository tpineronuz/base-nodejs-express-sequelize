import express from 'express';
import validate from 'express-validation';

import authMiddleware from '../middleware/auth';
import adminAuthMiddleware from '../middleware/adminAuth';

import * as userController from '../controllers/user/user.controller';
import * as userValidator from '../controllers/user/user.validator';

const router = express.Router();

/**
 * @api {get} api/user/allUsers Return the all Users
 * @apiName allUsers
 * @apiGroup Users
 * @apiHeader {String} Authorization Token of authenticated user
 * @apiHeaderExample {json} Header
 *    {"Authorization": "JWT xyz.abc.123.hgf"}
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *     {
 *        "code": 200,
 *        "data": {
 *            "users": {
 *                "count": 14,
 *                "rows": [
 *                    {
 *                        "id": 24,
 *                        "firstName": "Roary",
 *                        "lastName": "Martinez",
 *                        "email": "roary@martinez.net",
 *                        "profilePic": null,
 *                        "isVerified": false,
 *                        "createdAt": "2021-07-15T15:36:52.000Z",
 *                        "updatedAt": "2021-07-15T15:36:52.000Z"
 *                    },
 *                    {
 *                        "id": 23,
 *                        "firstName": "Irma",
 *                        "lastName": "Gallagher",
 *                        "email": "irma@gallgher.net",
 *                        "profilePic": null,
 *                        "isVerified": false,
 *                        "createdAt": "2021-07-15T15:26:58.000Z",
 *                        "updatedAt": "2021-07-15T15:26:58.000Z"
 *                    }
 *                ]
 *            }
 *        },
 *        "success": true
 *    }
 * @apiErrorExample {json} Find error
 *    HTTP/1.1 404
 *    {
 *        "errorMessage": "Incorrect token is provided, try re-login",
 *        "data": null,
 *        "success": false
 *    }
 */
router.get('/allUsers', authMiddleware, adminAuthMiddleware, userController.allUsers);

/**
 * @api {put} /api/user/change-password Edit User password
 * @apiName change-password
 * @apiGroup Users
 * @apiParam {String} Oldpassword User password
 * @apiParam {String} newPassword password
 * @apiHeader {String} Authorization Token of authenticated user
 * @apiHeaderExample {json} Header
 *    {"Authorization": "JWT xyz.abc.123.hgf"}
 * @apiParamExample {json} Input
 *    {
 *        "oldPassword": "JohnConnor34$$"
 *        "newPassword": "JohnConnor34$$"
 *    }
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *        "code": 200,
 *        "data": {},
 *        "success": true
 *    }
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 404
 *    {
 *        "errorMessage": "Incorrect token is provided, try re-login",
 *        "data": null,
 *        "success": false
 *    }
 */
router.post(
  '/changePassword',
  authMiddleware,
  validate(userValidator.changePassword),
  userController.changePassword,
);

/**
 * @api {get} /api/user/me User Profile
 * @apiName me
 * @apiGroup Users
 * @apiHeader {String} Authorization Token of authenticated user
 * @apiHeaderExample {json} Header
 *    {"Authorization": "JWT xyz.abc.123.hgf"}
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *     {
 *        "code": 200,
 *        "data": {
 *            "user": {
 *                "id": 19,
 *                "firstName": "John",
 *                "lastName": "Connor",
 *                "email": "john@connor.com",
 *                "profilePic": null,
 *                "isVerified": false,
 *                "createdAt": "2021-07-14T13:29:59.000Z",
 *                "updatedAt": "2021-07-14T13:29:59.000Z"
 *            }
 *        },
 *        "success": true
 *    }
 * @apiErrorExample {json} Find error
 *    HTTP/1.1 404
 *    {
 *        "errorMessage": "Incorrect token is provided, try re-login",
 *        "data": null,
 *        "success": false
 *    }
 */
router.get('/me', authMiddleware, userController.profile);

module.exports = router;

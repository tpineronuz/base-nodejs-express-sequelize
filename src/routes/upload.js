import express from 'express';
import * as uploadController from '../controllers/upload/upload.controller';

const router = express.Router();

/**
 * @api {put} /api/upload/ upload s3
 * @apiName upload
 * @apiGroup Upload s3
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
router.post('/', uploadController.upload);

module.exports = router;

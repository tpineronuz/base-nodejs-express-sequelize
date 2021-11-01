import { successResponse, errorResponse } from '../../helpers';

const formidable = require('formidable');
const { S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_BUCKET_NAME } = process.env;
const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');
const s3 = new S3({
  accessKeyId: S3_ACCESS_KEY_ID,
  secretAccessKey: S3_SECRET_ACCESS_KEY,
});

export const upload = async (req, res) => {
  try {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, da, files) {
      if (files && files.file) {
        const { file } = files;
        const fileName = `${Date.now()}_${file.name}`;
        const uploadFile = (img) => {
          const fileContent = fs.readFileSync(img);
          const params = {
            Bucket: S3_BUCKET_NAME,
            Key: fileName,
            Body: fileContent,
          };
          s3.upload(params, function (err, data) {
            if (err) {
              throw err;
            } else {
              const url = `${data.Location}`;
              return successResponse(req, res, { url, fileName, uploaded: true });
            }
          });
        };
        uploadFile(file.path);
      } else {
        throw new Error('File not found');
      }
    });
  } catch ({ message }) {
    return errorResponse(res, 500, { message });
  }
};

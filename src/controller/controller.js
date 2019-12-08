require('dotenv').config();
const AWS = require('aws-sdk');
const fs = require('fs')
const s3 = new AWS.S3({
    accessKeyId: process.env.ID,
    secretAccessKey: process.env.SECRET
});
const respon = require('../response/response')

exports.post = async (req, res) => {
    let path = req.file.path;
    var url ;
    var params = {
        ACL: 'public-read',
        Bucket: process.env.BUCKET_NAME,
        Body: fs.createReadStream(path),
        Key: `${req.file.originalname}`
    };
    s3.upload(params, (err, data) => {
        if (err) {
            return respon.response(res, null, 404, "Error Upload Image") 
        }
        if (data) {
            fs.unlinkSync(path);
            url = data.Location;
            return respon.response(res, url, 200, "Upload image Success Url") 
        }
    });
}
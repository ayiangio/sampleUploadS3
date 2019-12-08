module.exports = (app) => {
	const test = require('../controller/controller');
	const multer = require('multer');

	const storage = multer.diskStorage({
		filename: function (req, file, cb) {
			cb(null, file.originalname);
		}
	})
    let upload = multer({ storage: storage, limits: { fileSize: 100000000 } })
    
	app.post('/upload',upload.single('image'), test.post);
};
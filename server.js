require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const bodyPraser = require('body-parser');
const test = require('./src/route/route');
app.use(
	bodyPraser.urlencoded({
		extended: false
	})
);

app.listen(port);

test(app);
require('dotenv').config({path: "./config.env"});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ConnectDB = require('./database/cinemawa_db');

//Database connection
ConnectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// reserved port
const PORT = process.env.PORT || 6000;

const server = app.listen(PORT, () => {
    console.log(`@@@@@@@@@@@@@@@@@@ Server is running on port ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
    console.log(`@@@@@@@@@@@@@@@@@@ Logged error : ${err}`);
    server.close(() => {
        process.exit(1);
    });
});
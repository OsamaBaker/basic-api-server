'use strict';

const server = require('./src/server');
require('dotenv').config();

const { db } = require('./src/models/index');
//the port should be from the .evn file
db.sync()
    .then(() => {
        server.start(process.env.PORT);
    })
    .catch(console.error);
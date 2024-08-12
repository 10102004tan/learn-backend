require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const {default:helmet} = require('helmet');
const compression = require('compression');
const bcrypt = require('bcrypt');

// console.log("Process::",process.env);

//init middleware
app.use(morgan('dev')); //=> development
app.use(helmet()); //=> secure
app.use(compression()); //=> compress response

//init database
const db = require('./dbs/init.mongodb');

//init routes
app.get('/',(req,res)=>{
    const strCompress = 'Hello World';
    const myPlaintextPassword = 's0/\/\P4$$w0rD';
    bcrypt.hash(myPlaintextPassword, 10, function(err, hash) {
        console.log("hash ok");
    });
    res.json({
        message: 'Hello World',
        metadata:strCompress.repeat(100000)
    });
});

//handling errors
// db.disconnect();
module.exports = app;
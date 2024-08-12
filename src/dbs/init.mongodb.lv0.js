'use strict';

const mongooes = require('mongoose');

const connectString = 'mongodb://localhost:27017/learn';

mongooes.connect(connectString).then(()=>{
    console.log('connected to database');
}).catch((err)=>{
    console.log('error connecting to database',err);
});

//dev
if (1 === 1) {
    mongooes.set('debug',true);
    mongooes.set('debug',{
        color:true,
    })
}

module.exports = mongooes;
'use strict';


const mongooes = require('mongoose');
const os = require('os');
const process = require('process');
const _SECONDS = 4000;

const countConnect = () => {
    console.log(`Count connect ${mongooes.connections.length}`);
}

const countCore = () => {
    process.env.UV_THREADPOOL_SIZE = os.cpus().length;
    console.log(`Count core ${os.cpus().length}`);
}

const checkOverload = () => {
    
    setInterval(() => {
    const numberConnection = mongooes.connections.length;
    const numberCore = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    // Example maximum connection of connection based on core
    const maximumConnection = numberCore * 2; // 2 connection per core < khong the biet duoc , phai test

    console.log(`memoryUsage: ${memoryUsage} bytes`);
    console.log(`memoryUsage: ${memoryUsage / 1024/1024} MB`);
    //  1mb = 1,000,000 bytes


    if (numberConnection > maximumConnection) {
        console.log('Overload connection');
    }
    },_SECONDS);
}

module.exports = {
    countConnect,
    countCore,
    checkOverload,
};
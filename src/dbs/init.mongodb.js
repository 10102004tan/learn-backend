'use strict';


const mongooes = require('mongoose');
const { countConnect,countCore,checkOverload } = require('../helpers/check.connect');


class Database {

    // static instance = null;

    constructor() {
        this.connect();
    }

    //connect to database
     connect(type = 'mongodb') {

        //dev
        if (1 === 1) {
            mongooes.set('debug',true);
            mongooes.set('debug',{
                color:true,
            })
        }

        const connectString = 'mongodb://localhost:27017/learn';
        
        mongooes.connect(connectString).then(() => {
            console.log('connected to database PRO');
            countConnect();
            countCore();
            checkOverload();
        })
        .catch((err) => {
            console.log('error connecting to database', err);
        });

       
    }

    static getInstance(){
        if (!Database.instance){
            Database.instance = new Database();
        }
        return Database.instance;
    }        

}

const instanceMongoDB = Database.getInstance();

module.exports = instanceMongoDB;

module.exports = mongooes;
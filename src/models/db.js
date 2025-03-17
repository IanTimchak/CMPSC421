const mongoose = require('mongoose');
const Admin = mongoose.mongo.Admin;


//connection

//Mongo DB module
// Initializes connection to MongoDB through Mongoose.
/**
 * @description Initializes connection to mongoDB and initializes mongoose models.
 * @returns {Promise} A promise that resolves when the connection is established.
 * @throws {Error} If the connection fails.
 */
async function startConnection() {
    console.log(`env var USERNAME: ${process.env.MONGO_USERNAME} and PASSWORD: ${process.env.MONGO_PASSWORD}`); //debug
    const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@imt5148ordersystem.6wdxa.mongodb.net/?retryWrites=true&w=majority&appName=imt5148OrderSystem`;
    try {
        await mongoose.connect(uri, {
            dbName: 'CMPSC421',
        });
        

        //list databases (debug)
        await listDatabases();


        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

/**
 * @description Closes the connection to the mongoDB.
 */
async function closeConnection() {
    try {
        await mongoose.connection.close();
        console.log('MongoDB connection closed');
    } catch (error) {
        console.error('Error closing MongoDB connection:', error);
    }
}

// returns a list of databases
async function listDatabases() {
    console.log("Listing databases..."); //debug
    try {
        const admin = new Admin(mongoose.connection.db);
        const dbs = await admin.listDatabases();
        console.log("Databases: ", dbs.databases);
    } catch (error) {
        console.error('Error listing databases:', error);
    }
}




//module exports
module.exports = {
    startConnection,
    closeConnection,
    mongoose, //Export mongoose for model creation
};
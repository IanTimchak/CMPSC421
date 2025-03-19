const mongoose = require('mongoose');
const { ONGenerator } = require('./util'); //Import ONGenerator
const Admin = mongoose.mongo.Admin;

//Models
const Schemas = require('./Schemas');


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

//SIMULATED DELAY FOR TESTING
async function delay(ms) {
    return await new Promise(resolve => setTimeout(resolve, ms));
}


//General Create Listing
// This function is used to create a new listing in the database
/**
 * @description creates a new listing in the specified collection.
 * @param {string} collectionName - The name of the collection to create the listing in.
 * @param {object} data - The data to insert into the collection.
 * @returns {Promise} A promise that resolves with the created listing.
 * @throws {Error} If the listing creation fails.
 * @example
 * createListing('products', { name: 'Product1', price: 100 });
 * // Returns a promise that resolves with the created listing
 */
async function createListing(collectionName, data) {
    try {
        const Model = Schemas[collectionName]; // Get the model for the collection
        var listing = await new Model(data).save().then().catch();
        //Catches key indexing error if the data is not valid for the model
        return listing; // Return the created listing
    } catch (error) {
        console.error('Error creating listing:', error);
        throw error;
    }
}



//Utilities
//generate order number
async function generateOrderNumber() {
    //get the last order number
    try {
        return ONGenerator(15);
    } catch (error) {
        console.error('Error generating order number:', error);
        throw error;
    }
}







//module exports
module.exports = {
    startConnection,
    closeConnection,
    delay, //Export delay for testing
    createListing,

    //utilities
    generateOrderNumber,

    mongoose, //Export mongoose for model creation
};
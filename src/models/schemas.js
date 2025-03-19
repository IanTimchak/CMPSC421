//Mongoose Schemas

// This file contains the Mongoose schemas for the MongoDB collections used in the application.

const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectID = Schema.Types.ObjectId;

//accountSchema
const accountSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

//orderSchema
const orderSchema = new mongoose.Schema({
    orderNumber: {
        type: String,
        trim: true,
        required: true,
        index: true // index value
    },
    userId: {
        type: ObjectID,
        required: true,
        ref: 'accounts' // This should reference the account schema
    },
    productList: [{
        productId: {
            type: ObjectID,
            required: true,
            ref: 'products' // This should reference the product schema
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        }
    }],
    status: {
        type: String,
        enum: ['Order Not Commited', 'Order Commited'],
        default: 'Order Not Commited'
        // This field indicates the status of the order
        // 'Order Not Commited' means the order is not yet finalized
        //// In this case, the order is still in the cart and not yet processed
        // 'Order Commited' means the order has been finalized and processed

    }
}, { timestamps: true });


//productSchema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });



//exports
module.exports = {
    accounts: mongoose.model('accounts', accountSchema),
    orders: mongoose.model('orders', orderSchema),
    products: mongoose.model('products', productSchema)
};
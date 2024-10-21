const mongoose = require('mongoose');

const OrderShema = new  mongoose.Schema({
    userId: {type: String, require: true},
    customerId: {type: String, require: true},
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {type: Number, required: true},
    subtotal: {type: Number ,required: true},
    total: {type: Number, required: true},
    delivery_status: {type: Number, default: "pending"},
    payment_status: {type: String, required: true},
    
}, { timestamps: true });

module.exports = mongoose.model("Order", OrderShema)

const mongoose = require('mongoose');
const productSchema =  mongoose.Schema({

    
        name: { 
            type: String,
             required: [true ,"Name is required"]
       
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    image: {
        type: String,
        required: true,
        default: 'https://via.placeholder.com/150'
    }
}, {
    timestamps: true
});
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
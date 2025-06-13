const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        default: 'India'
    },
    duration: {
        type: String,
        default: '7 Days'
    },
    price: {
        type: String,
        required: true,
        default: '₹9999'
    },
    rating: {
        type: Number,
        default: 4.5
    },
    reviews: {
        type: Number,
        default: 0
    },
    sold: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Package', packageSchema);

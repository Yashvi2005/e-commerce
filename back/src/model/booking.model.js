const mongoose = require('mongoose')

const bookingSchema =new mongoose.Schema({
    userId : {
        type : String
    },
    productId : {
        type : String
    },
    quantity : {
        type : String
    }
})

const User = mongoose.model('User' , userSchema)
module.exports = User
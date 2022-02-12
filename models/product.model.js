const mongoose =require('mongoose')

const productmodel =mongoose.model('product',{
    brand:String,
    price:Number,
    instock:Boolean,
    createdat:{type:Date,default:Date.now()},
    updatedat:{type:Date,default:Date.now()},
})

module.exports =productmodel
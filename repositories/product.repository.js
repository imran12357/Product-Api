const productmodel =require('../models/product.model')


const add =(data)=>{
    const newproduct =new productmodel(data)
    return newproduct.save()
}

module.exports ={add}
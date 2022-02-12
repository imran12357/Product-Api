const productmodel =require('../models/product.model')


const add =(data)=>{
    const newproduct =new productmodel(data)
    return newproduct.save()
}

const getproducts =()=>{
    const projection ={__v:0}
    const filter ={};
    return productmodel.find(filter,projection)
}

module.exports ={add,getproducts}
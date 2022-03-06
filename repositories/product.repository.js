const productmodel =require('../models/product.model')


const add =(data)=>{
    const newproduct =new productmodel(data)
    return newproduct.save()
}
const updateproducts=(id,data)=>{
    const {brand,price,instock}=data;
    return productmodel.updateOne({_id:id},{
        $set:{
            _id:productmodel._id,
            brand,
            price,
            instock,
            updatedat:Date.now()
        }
    })
}
const getproducts =(pageindex,pagesize,brand)=>{
    const projection ={__v:0,_id:0,createdat:0,updatedat:0}
    const filter ={}
    const skipproducts =(pageindex-1)*pagesize
    if(brand)filter.brand =brand
    return productmodel.find(filter,projection)
        .skip(skipproducts)
        .limit(pagesize)
}
const productscount =(brand)=>{
    const filter ={brand}
    return productmodel.count(filter)
}

const getproductsbyid =(id)=>{
    const projection ={__v:0}
    const filter ={id}
    return productmodel.findOne(filter,projection)
}

module.exports ={add,getproducts,updateproducts,getproductsbyid,productscount}
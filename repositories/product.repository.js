const productmodel =require('../models/product.model')


const add =(data)=>{
    const newproduct =new productmodel(data)
    return newproduct.save()
}

const getproducts =()=>{
    const projection ={__v:0,_id:0,createdat:0,updatedat:0}
    const filter ={};
    return productmodel.find(filter,projection)
}
const updateproducts=(id,data)=>{
    const {brand,price,instock}=data;
    return productmodel.updateOne({id},{
        $set:{
            brand,
            price,
            instock,
            updatedat:Date.now()
        }
    })
}

module.exports ={add,getproducts,updateproducts}
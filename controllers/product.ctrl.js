const productrepository = require('../repositories/product.repository')

const add = async (req, res) => {
    try {
        const data = req.body
        await productrepository.add(data)
        res.status(201);
        res.send()

    } catch (e) {
        res.status(500)
        res.json('unable to add data')
    }
}

const Products =async(req,res)=>{
    try{
        const pageindex =+req.params.page || 1;
        const pagesize =+req.params.size || 10;
        const brand =req.query.brand || ""
        const totalproducts = await productrepository.productscount(brand)
        const totalpages =Math.ceil(totalproducts/pagesize)
        const products =await productrepository.getproducts(pageindex,pagesize,brand)
        const response ={
            data:products,
            metadata:{
                totalproducts,
                totalpages
            }
        }
        res.status(200);
        res.json(response)
    }catch(e){
        res.status(500).send('ineternal server error')
    }
}
const updateproduct =async(req,res)=>{
    try{
        const id =req.params.id
        await productrepository.updateproducts(id,req.body)
        res.status(201).send()
    }catch(e){
        console.log(e)
        res.status(500)
        res.send('invalid server error')
    }
}
const getproductbyid =(req,res)=>{
    productrepository.getproductsbyid(req.params.id)
        .then(product=>res.status(201).json(product))
        .catch(err=>res.status(402).send("internal server error"))
}

const signup =(req,res)=>{
    
}
module.exports = { add,Products,updateproduct,getproductbyid}

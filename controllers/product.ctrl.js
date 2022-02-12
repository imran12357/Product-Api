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
        const products =await productrepository.getproducts()
        res.status(200);
        res.json(products)
    }catch(e){
        res.status(500).send('ineternal server error')
    }
}
module.exports = { add,Products }

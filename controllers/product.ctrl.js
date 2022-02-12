const productrepository =require('../repositories/product.repository')

const add =async(req,res)=>{
    try{
        const data= req.body
        await productrepository.add(data)
        res.status(201);
        res.send()

    }catch(e){
        res.status(500)
        res.json('unable to data')
    }


}
module.exports= {add}
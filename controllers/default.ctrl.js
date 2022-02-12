const mongoose =require('mongoose')
const config =require('../configs/index')

const get =(req,res)=>{
    res.status(201);
    res.json('Product Api')
}

const health =async(req,res)=>{
    try{
        await mongoose.connect(config.dbconstr)
        res.status(200)
        res.json('db :up')
    }catch(e){
        console.log(e)
        res.status(500);
        res.json('internal server error')
    }

}
module.exports={get,health}
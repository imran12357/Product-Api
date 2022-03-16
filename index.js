const express =require('express')
const app =express();
const mongoose =require("mongoose")
const defaultrouter =require('./routes/default.route')
const config =require("./configs/index");
const productrouter =require('./routes/product.route')
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
app.listen(port ,()=>{
    console.log(`server is running on port  ${port}`)
})
app.use(bodyParser.json())
mongoose.connect(config.dbconstr)
    .then(res => {console.log("connected to mongodb")})
    .catch(err =>{console.log("failed to conect to database")})
app.use('/',defaultrouter)
app.use('/api/products',productrouter)


const express =require('express');
const  router = express.Router()

const productctrl =require('../controllers/product.ctrl')


router.post('/',productctrl.add)
router.put('/:id',productctrl.updateproduct)
router.get('/:id',productctrl.getproductbyid)
router.get('/page/:page/size/:size',productctrl.Products)

module.exports =router
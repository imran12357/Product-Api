const express =require('express');
const  router = express.Router()

const productctrl =require('../controllers/product.ctrl')


router.post('/',productctrl.add)
router.put('/:id',productctrl.updateproduct)
router.get('/',productctrl.Products)

module.exports =router
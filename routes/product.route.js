const express =require('express');
const  router = express.Router()

const productctrl =require('../controllers/product.ctrl')


router.post('/',productctrl.add)
router.get('/',productctrl.Products)

module.exports =router
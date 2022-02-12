const express =require('express');
const  router = express.Router()

const productctrl =require('../controllers/product.ctrl')


router.post('/',productctrl.add)
// router.get('/',productctrl.add)

module.exports =router
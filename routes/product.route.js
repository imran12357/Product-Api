const express =require('express');
const  router = express.Router()
const multer =require('multer')
const fs= require('fs')
const path= require('path')


const productctrl =require('../controllers/product.ctrl')

const dir = './uploads';
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

const storage = multer.diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
        const uniqueToken = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileName = uniqueToken + '-' + file.originalname;
        req.resume = fileName;
        cb(null, fileName);
    }
});

const upload = multer({ storage: storage });


router.post('/',productctrl.add)
router.put('/:id',upload.single('image'),productctrl.updateproduct)
router.get('/:id',productctrl.getproductbyid)
router.get('/page/:page/size/:size',productctrl.Products)
router.get('/',productctrl.Products)

module.exports =router
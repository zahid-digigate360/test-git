const Product = require('../models/Product');
const { verifyTokenAndAdmin } = require('./verifyToken');

const router = require('express').Router();

//CREATE

router.post('/', verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    } catch (error) {
        res.status(500).json(error);
    }
})


//UPDATE

router.put('/:id', verifyTokenAndAdmin, async (req, res) => {

    try {
        const newProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(newProduct);

    } catch (error) {
        res.status(500).json(error);
    }
});


//DELETE 

router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        Product.findByIdAndDelete(req.params.id);
        res.status(200).json('Product has been deleted...')
    } catch (error) {
        res.status(500).json(error);
    }
})

//FIND

router.get('/:id', async (req, res) => {
    try {
        const FoundProduct = await Product.findById(req.params.id);
        res.status(200).json(FoundProduct);
    } catch (error) {
        res.status(500).json(error);
    }
})

//FIND PRODUCTS

router.get('/', async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;

    try {
        let products;
        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(2);
        } else if (qCategory) {
            products = await Product.find({
                categries: {
                    $in: [qCategory],
                },
            })
        } else {
            products = await Product.find()
        }
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router
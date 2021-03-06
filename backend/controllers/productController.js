import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'


// @desc  Fetch all products
// @route  GET api/products
// @access public

export const getProducts = asyncHandler(async(req, res, next)=> {
    
    const products = await Product.find({})

    res.json(products)



})


// @desc  Fetch single products
// @route  GET api/products/:id
// @access public

export const getProduct = asyncHandler(async(req, res, next)=> {
    
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }
    else{
        res.status(404)
        throw new Error('Product not found')
    }
    
})
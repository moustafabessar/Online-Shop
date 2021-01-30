const productsModel = require('../models/products.model')

exports.getProduct  = (req,res,next) =>{
    productsModel.getFirstProduct()
    .then((product) =>{
        res.render('product',{
            product: product
        })
    })
}

exports.getProductById = (req,res,next) => {
    //get idd
    //get product
    //render

    let id = req.params.id
    productsModel.getProductById(id)
    .then((product) => {
        res.render('product',{
            product: product
        })
    })
}
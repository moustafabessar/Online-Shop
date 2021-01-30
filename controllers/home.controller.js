const productsModel = require('../models/products.model')
const { all } = require('../routes/home.route')

exports.getHome = (req,res,next) => {
    
    // get category 
    //if category && category !== all
    //      filter
    //else
    //render all
    let category = req.query.category
    let validCategories = ['all', 'ios phone','computers', 'mac computer','tablet']
    let productsPromise
    if(category && validCategories.includes(category))
    productsPromise = productsModel.getProductsByCategory(category)
    else
        //get products
        //render index.ejs
        productsPromise = productsModel.getAllProducts()
    productsPromise.then(products => {
        res.render('index',{
            products: products
        })
    })
}
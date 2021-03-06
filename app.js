const express = require('express')
const path = require('path')

const homeRouter = require('./routes/home.route')
const productRouter = require('./routes/product.route')
const app = express()

app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.static(path.join(__dirname, 'images')))

app.set('view engine','ejs')
app.set('views', 'views')    //default

app.use('/',homeRouter)
app.use('/product',productRouter)

app.listen(3000, () => {
    //console.log(err)
    console.log('server listen on port 3000')
})
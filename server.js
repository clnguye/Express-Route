const express = require('express')
const app = express()
app.use(express.static("public"))
app.use(express.urlencoded({ extended: 'true'}))

app.set('view engine', 'ejs')

// app.use(logger)

// app.get('/', (req,res) =>{
//     //res.send('Hello World')
//     res.render("index", {text: 'world'})
// })

const userRouter = require("./routes/users")
const bookRouter = require("./routes/books")
const carRouter = require('./routes/cars')
app.use('/users', userRouter)
app.use('/books', bookRouter)
app.use('/cars', carRouter)

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

// console.log('Hill')
app.listen(3100, console.log('Port 3100'))

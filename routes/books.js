const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
    res.send('books')
})

router.get('/new',(req,res) =>{
    res.send('New Book form:')
})

module.exports = router


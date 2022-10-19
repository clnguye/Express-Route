const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
    res.send('Many cars')
})

router.get('/new',(req,res) => {
    res.send('New Car Form:')
})

module.exports = router
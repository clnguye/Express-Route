const express = require('express')
const { appendFile } = require('fs')
const router = express.Router()

const app = express()
app.use(authorizeUserAccess)

router.get('/', authorizeUserAccess, (req,res) => {
    //res.send('User List')
    console.log('Inside users')
    res.send(`${req.query.admin}`)
})

router.get('/new', (req,res) => {
    res.render('user/new',{firstName: "Chad"})
})

router.post('/', (req,res) => {
    console.log(req.body.firstName)
    res.send(`Hi ${req.body.firstName}`)
})

router.get('/:id',(req,res) => {
    res.send(`Get user with ID ${req.params.id}`)
})

router.put('/:id',(req,res) => {
    res.send(`Update user with ID ${req.params.id}`)
})

router.delete('/:id',(req,res) => {
    res.send(`Delete user with ID ${req.params.id}`)
})

function authorizeUserAccess(req,res,next){
    if (req.query.admin === 'true') {
        req.admin = 'true'
        console.log('Before Next')
        next()
        console.log('After Next')
    } else {
        res.send('ERROR: You must be an admin')
        console.log('After else')
    }
}

module.exports = router
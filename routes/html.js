const path = require('path')
const router = require('express').Router();
const address = path.join(__dirname, '../public/index.html');


router.get('/notes', (req, res) => {
    res.sendFile(address)
})

router.get('/', (req, res) => {
    res.sendFile(address)
})

// router.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'))
// })

module.exports = router
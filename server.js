const express = require('express')
const html = require('./routes/html')
const api = require('./routes/api')

const app = express();

const PORT = process.env.PORT || 5500

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.use('/',html)
app.use('/api', api)

app.listen(PORT, () => {
    console.log(`port listening on port ${PORT}`)
})
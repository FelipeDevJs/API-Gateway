const express = require('express')
const httpProxy = require('express-http-proxy')
const logger = require('morgan')
const helmet = require('helmet')
const app = express()

app.use(logger('dev'))
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res)=>{
    res.send('Pagina principal')
})

app.use('/user', httpProxy('http://localhost:3001', {timeout:3000}))
app.use('/about', httpProxy('http://localhost:3002', {timeout:3000}))

app.listen(3000,()=>{console.log('rodando 3000')})
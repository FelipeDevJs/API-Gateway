const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('about')
})


app.listen(3002,()=>{console.log('rodando 3002')})
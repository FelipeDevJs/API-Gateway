const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('user')
})


app.listen(3001,()=>{console.log('rodando 3001')})
const express = require('express')
const db = require(.);

const app = express();

app.get('/', function (req,res){
    res.send('EXPRESS JS Running')
})

app.listen(3000)   

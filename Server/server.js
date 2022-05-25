const express = require('express')
const api = require('./src/api')
var cors = require('cors')

const app = express();
app.use(cors())
var port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.json(api)
})
app.listen(port)
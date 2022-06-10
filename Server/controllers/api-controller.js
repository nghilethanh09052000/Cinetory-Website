const api = require('../src/api')

const getApi = (req,res) =>{
    res.json(api)
}
module.exports={
    getApi
}

const express = require('express')
const api = require('./src/api')
var cors = require('cors')
const app = express();
const apiRoutes = require('./routes/api-routes')
const mailRoutes = require('./routes/mail-routes')

app.use(cors())
var port = process.env.PORT || 3003;

app.use(apiRoutes)
app.use(mailRoutes)

app.listen(port)
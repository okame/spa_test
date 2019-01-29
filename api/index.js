const express = require('express')
const cors = require('./middlewares/cors')
const bodyParser = require('body-parser')
const users = require('./routers/users')
const todos = require('./routers/todos')
const app = express()
const port = process.argv[2] || 8001

app.use(cors)
app.use(bodyParser.json())
app.use('/users', users)
app.use('/todos', todos)

app.listen(port)
console.log(`Listen server port: ${port}`)

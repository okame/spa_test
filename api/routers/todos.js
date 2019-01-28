const express = require('express')
const router = express.Router()

router.storage = {
  todos: []
}

router.get('/', (req, res) => {
  res.send({ todos })
})

router.post('/', (req, res) => {
  todos.push(req.params.todo)
  res.send({ todos })
})

module.exports = router

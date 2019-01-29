const express = require('express')
const router = express.Router()

router.storage = {
  todos: []
}

router.get('/', (req, res) => {
  res.send({ todos: router.storage.todos })
})

router.post('/', (req, res) => {
  router.storage.todos.push(req.body.todo)
  res.send({ todos: router.storage.todos })
})

module.exports = router

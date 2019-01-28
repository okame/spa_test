const express = require('express')
const router = express.Router()

router.storage = {}

router.post('/sign_in', (req, res) => {
  res.send({path: '/sign_in'})
})

router.post('/sign_out', (req, res) => {
  res.send({path: '/sign_out'})
})

module.exports = router

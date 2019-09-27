const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/quotes', (req, res) => {
  db.getQuotes()
    .then(results => {
      res.json({quotes: results.map(quote => quote.quote)})
    })
})

router.get('/ollie', (req, res) => {
  db.getQuestions()
  .then(results => {
    res.json({questions: results.map(question => question.question)})
  })
})

router.get('/quotes/:name', (req, res) => {
  db.getQuotesByName(req.params.name)
  .then(results => {
    res.json(results)
  })
})

module.exports = router

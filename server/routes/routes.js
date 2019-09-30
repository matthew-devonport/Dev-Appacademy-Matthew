const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/quotes', (req, res) => {
  db.getQuotes()
    .then(results => {
      res.json({ quotes: results.map(quote => quote.quote) })
    })
})

router.get('/ollie', (req, res) => {
  db.getQuestions()
    .then(results => {
      res.json({ questions: results.map(question => question.question) })
    })
})

router.get('/quotes/:name', (req, res) => {
  db.getQuotesByName(req.params.name)
    .then(results => {
      res.json(results)
    })
})

router.get('/jv', (req, res) => {
  console.log('hit')
  db.getVideos()
    .then(results => {
      let data = {
        videos: results.map(video => {
          return {
            url: video.url, 
            name: video.name
          }
        }
        )
      }
      res.json(data)
    })
})



module.exports = router

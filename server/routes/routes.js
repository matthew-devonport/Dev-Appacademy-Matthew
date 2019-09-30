const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/quotes', (req, res) => {
  db.getQuotes()
    .then(results => {
      res.json({ quotes: results.map(quote => quote.quote) })
    })
    .catch(e => {
      console.log(e)
    })
})

router.get('/ollie', (req, res) => {
  db.getQuestions()
    .then(results => {
      res.json({ questions: results.map(question => question.question) })
    })
    .catch(e => {
      console.log(e)
    })
})

router.get('/quotes/:name', (req, res) => {
  db.getQuotesByName(req.params.name)
    .then(results => {
      res.json(results)
    })
    .catch(e => {
      console.log(e)
    })
})

router.get('/jv', (req, res) => {
  db.getVideos()
    .then(results => {
      let data = {
        videos: results.map(video => {
          return {
            url: video.url,
            name: video.name
          }
        })
      }
      res.json(data)
    })
    .catch(e => {
      console.log(e)
    })
})



module.exports = router

const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const connection = require('knex')(config)

module.exports = {
  getQuotes,
  getQuotesByName,
  getQuestions
}

function getQuotes (db = connection) {
  return db('quotes').select()
}

function getQuotesByName (name, db = connection) {
  return db('quotes').where('quotes.name', name).select()
}

function getQuestions (db = connection) {
  return db('questions').select()
}

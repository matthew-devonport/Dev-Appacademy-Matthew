const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const db = require('knex')(config)

module.exports = {
  getQuotes,
  getQuotesByName
}

function getQuotes (db = db) {
  return db('quotes').select()
}

function getQuotesByName (name, db = db) {
  return db('quotes').where('quotes.name', name).select()
}

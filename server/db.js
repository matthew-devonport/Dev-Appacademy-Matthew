const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const connection = require('knex')(config)

module.exports = {
  getQuotes,
  getQuotesByName,
  getQuestions,
  getVideos,
  getVideosByName,
  getStudents
}

function getQuotes (db = connection) {
  return db('quotes').select()
}

function getQuotesByName (name, db = connection) {
  return db('quotes').where('name', name)
}

function getQuestions (db = connection) {
  return db('questions').select()
}

function getVideos (db = connection) {
  return db('youtube').select()
}

function getVideosByName (name, db = connection) {
  return db('youtube').where('name', name)
}

function getStudents (db=connection) {
  return db('students').select()
}
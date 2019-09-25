const db = require('../../server/db')
const config = require('../../knexfile').test
const testDb = require('knex')(config)

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('db', () => {
  test('getQuotes gets all quotes', () => {
    return db.getQuotes(testDb)
    .then((quotes) => {
      expect(quotes.length).toBe(18)
    })
  })
})
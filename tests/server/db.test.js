const db = require('../../server/db')
const config = require('../../knexfile').test
const testDb = require('knex')(config)

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('quote db', () => {
  test('getQuotes gets all quotes', () => {
    return db.getQuotes(testDb)
      .then((quotes) => {
        expect(quotes.length).toBe(18)
      })
  })
  test('getQuoteByName returns right number of quotes', () => {
    return db.getQuotesByName('Ollie', testDb)
      .then((quotes) => {
        expect(quotes.length).toBe(4)
        expect(quotes[0].quote).toContain('Great hustle')
      })
  })
})

describe('questions db', () => {
  testDb('getQuestions gets all questions', () => {
    return db.getQuestions(testDb)
      .then((questions) => {
        expect(questions.length).toBe(19)
      })
  })
})

describe('videos db', () => {
  test('getVideos returns video url', () => {
    expect.assertions(1)
    return db.getVideos(testDb)
      .then((videos) => {
        expect(videos.length).toBe(33)
      })
  })

  test('getVideosByName returns the right url with name', () => {
    return db.getVideosByName('tdd bowling', testDb)
      .then((videos) => {
        expect(videos[0].url).toContain('https://www.youtube.com/watch?v=GdJO2aDWayE&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF')
      })
  })
})

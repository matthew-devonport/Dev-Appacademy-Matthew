
const request = require('supertest')
const server = require('../../server/server')
const { getQuotesByName } = require('../../server/db')

jest.mock('../../server/db', () => ({
  getQuotes: () => Promise.resolve([{}, {}]),
  getQuestions: () => Promise.resolve([{}, {}, {}]),
  getQuotesByName: jest.fn(() => Promise.resolve([{},{},{},{}]))

}))

test('GET /', () => {
  return request(server)
    .get('/')
    .expect(200)
    .then((res) => {
    })
    .catch(err => expect(err).toBeNull())
})

test('api gets quotes', () => {
  return request(server)
    .get('/api/v1/quotes')
    .expect(200)
    .then((res) => {
      expect(res.body.quotes.length).toBe(2)
    })
})

test('api gets questions', () => {
  return request(server)
  .get('/api/v1/ollie')
  .expect(200)
  .then((res) => {
    expect(res.body.questions.length).toBe(3)
  })
})

test('api gets quotes by name', () => {
  return request(server)
  .get('/api/v1/quotes/Han')
  .then(res => {
    expect(getQuotesByName).toHaveBeenCalledWith('Han')
    expect(res.body.length).toBe(4)
  })
})

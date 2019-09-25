
const request = require('supertest')
const server = require('../../server/server')

jest.mock('../../server/db', () => ({
  getQuotes: () => Promise.resolve([{}, {}], [{}])
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

const request = require('supertest')
const server = require('../../server/server')
const { getQuotesByName, getQuotes, getQuestions, getVideos } = require('../../server/db')

jest.mock('../../server/db', () => ({
  getQuotes: jest.fn(() => Promise.resolve([{}, {}])),
  getQuestions: jest.fn(() => Promise.resolve([{}, {}, {}])),
  getQuotesByName: jest.fn(() => Promise.resolve([{}, {}, {}, {}])),
  getVideos: jest.fn(() => Promise.resolve([
      {
        id: 1,
        name: 'tdd bowling',
        url:
          'https://www.youtube.com/watch?v=GdJO2aDWayE&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF'
      },
      {
        id: 2,
        name: 'tdd bowling refactor and conways',
        url:
          'https://www.youtube.com/watch?v=DLLoypeoQyg&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=2'
      },
      {
        id: 3,
        name: 'express overview',
        url:
          'https://www.youtube.com/watch?v=J98pM2SfNlU&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=3'
      }
    ])
  )
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
  expect.assertions(2)
  return request(server)
    .get('/api/v1/quotes')
    .expect(200)
    .then((res) => {
      expect(getQuotes).toHaveBeenCalled()
      expect(res.body.quotes.length).toBe(2)
    })
})

test('api gets questions', () => {
  expect.assertions(2)
  return request(server)
  .get('/api/v1/ollie')
  .expect(200)
  .then((res) => {
    expect(getQuestions).toHaveBeenCalled()
    expect(res.body.questions.length).toBe(3)
  })
})

test('api gets quotes by name', () => {
  expect.assertions(2)
  return request(server)
  .get('/api/v1/quotes/Han')
  .then(res => {
    expect(getQuotesByName).toHaveBeenCalledWith('Han')
    expect(res.body.length).toBe(4)
  })
})

test('api gets videos', () => {
  expect.assertions(2)
  return request(server)
    .get('/api/v1/jv')
    .then(res => {
      expect(getVideos).toHaveBeenCalled()
      expect(res.body.videos.length).toBe(3)
    })
})
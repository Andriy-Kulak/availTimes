const book = require('./book')
const express = require('express')
const request = require('supertest')

const initBook = () => {
  const app = express()
  app.use(book)
  return app
}

const url = 'https://www.thinkful.com/api/advisors/availability'

describe('GET /book', () => {
  test('It should 200 and return an empty list of bookings', async () => {
    const app = initBook()
    const res = await request(app).get('/')

    expect(res.body.data).toEqual([])
  })
})

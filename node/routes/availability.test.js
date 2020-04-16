const availability = require('./availability')
const express = require('express')
const moxios = require('moxios')
const request = require('supertest')

const dataRes = {
  '2019-08-27': {
    '2019-08-27T14:00:00-04:00': 372955,
    '2019-08-27T13:00:00-04:00': 372955,
    '2019-08-27T10:00:00-04:00': 372955,
    '2019-08-27T11:00:00-04:00': 372955,
    '2019-08-27T16:00:00-04:00': 372955,
    '2019-08-27T12:00:00-04:00': 372955,
  },
  '2019-08-25': {
    '2019-08-25T20:00:00-04:00': 319369,
    '2019-08-25T10:30:00-04:00': 319369,
    '2019-08-25T11:00:00-04:00': 319369,
  },
}

const resJsonData = [
  { id: 372955, time: '2019-08-27T14:00:00-04:00' },
  { id: 372955, time: '2019-08-27T13:00:00-04:00' },
  { id: 372955, time: '2019-08-27T10:00:00-04:00' },
  { id: 372955, time: '2019-08-27T11:00:00-04:00' },
  { id: 372955, time: '2019-08-27T16:00:00-04:00' },
  { id: 372955, time: '2019-08-27T12:00:00-04:00' },
  { id: 319369, time: '2019-08-25T20:00:00-04:00' },
  { id: 319369, time: '2019-08-25T10:30:00-04:00' },
  { id: 319369, time: '2019-08-25T11:00:00-04:00' },
]

const initAvail = () => {
  const app = express()
  app.use(availability)
  return app
}

const url = 'https://www.thinkful.com/api/advisors/availability'

describe('GET /availability', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })
  test('It should 200 and return a transformed version of availability data', async () => {
    moxios.stubRequest(url, {
      status: 200,
      response: dataRes,
    })

    const app = initAvail()
    const res = await request(app).get('/')

    expect(res.body.data).toEqual(resJsonData)
  })
})

const { transformAvail } = require('./transform')

describe('util tests', () => {
  const data1 = {
    '2019-08-27': {
      '2019-08-27T14:00:00-04:00': 372955,
      '2019-08-27T13:00:00-04:00': 372955,
      '2019-08-27T10:00:00-04:00': 372955,
    },
  }
  const checkAgainst = [
    { id: 372955, time: '2019-08-27T16:00:00-04:00', name: 'Andriy' },
    { id: 372955, time: '2019-08-27T10:00:00-04:00', name: 'Kulak' },
  ]

  const res1 = [
    { id: 372955, time: '2019-08-27T14:00:00-04:00' },
    { id: 372955, time: '2019-08-27T13:00:00-04:00' },
  ]
  it('transformAvail to check against 2 objects', () => {
    expect(transformAvail(data1, checkAgainst)).toEqual(res1)
  })

  const res2 = [
    { id: 372955, time: '2019-08-27T14:00:00-04:00' },
    { id: 372955, time: '2019-08-27T13:00:00-04:00' },
    { id: 372955, time: '2019-08-27T10:00:00-04:00' },
  ]

  it('transformAvail to check against empty array', () => {
    expect(transformAvail(data1, [])).toEqual(res2)
  })
})

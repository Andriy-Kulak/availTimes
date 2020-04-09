const bookingSchema = require('./models/booking')

describe('bookin schema', () => {
  it('should error whe name is not provided', (done) => {
    try {
      bookingSchema({
        name: null,
        id: 333333,
        time: '2019-08-21T17:30:00-04:00',
      })
    } catch (e) {
      expect(e.message).toBe('Name is not a string')
      done()
    }
  })
  it('should error whe id is not provided', async (done) => {
    try {
      await bookingSchema({
        name: 'Andriy',
        id: null,
        time: '2019-08-21T17:30:00-04:00',
      })
    } catch (e) {
      expect(e.message).toBe('Id is not a number')
      done()
    }
  })
  it('schould error whe time is not correct', async (done) => {
    try {
      await bookingSchema({
        name: 'Andriy',
        id: 1123123,
        time: '20',
      })
    } catch (e) {
      expect(e.message).toBe('Time is not a valid date')
      done()
    }
  })
})
afterAll(async (done) => {
  done()
})

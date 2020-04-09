import { prettifyDate, tansformAvail } from './dataTransform'
import { responseHandler } from './apiMethods'
describe('util tests', () => {
  it('prettifyDate', () => {
    expect(prettifyDate(new Date('2019-08-21T20:00:00-04:00'))).toBe(
      '08/21/2019 8:00 PM'
    )
    expect(prettifyDate(new Date('2012-04-20T10:00:00-04:00'))).toBe(
      '04/20/2012 10:00 AM'
    )
  })
  it('dataTransform 1', () => {
    const data1 = [{ id: 372955, time: '2019-08-27T14:00:00-04:00' }]
    expect(tansformAvail(data1)).toMatchObject({
      '372955': ['2019-08-27T14:00:00-04:00'],
    })
  })

  it('dataTransform 2', () => {
    const data2 = [
      { id: 372955, time: '2019-08-27T16:00:00-04:00' },
      { id: 372955, time: '2019-08-27T12:00:00-04:00' },
      { id: 319369, time: '2019-08-25T20:00:00-04:00' },
    ]
    expect(tansformAvail(data2)).toMatchObject({
      '319369': ['2019-08-25T20:00:00-04:00'],
      '372955': ['2019-08-27T12:00:00-04:00', '2019-08-27T16:00:00-04:00'],
    })
  })

  it('responseHandler 200 test', async (done) => {
    const respData = [
      { id: 372955, time: '2019-08-27T14:00:00-04:00' },
      { id: 372955, time: '2019-08-27T13:00:00-04:00' },
    ]
    const method = () => {
      return new Promise((resolve, reject) => {
        return resolve({
          status: 200,
          json: () => ({ data: respData }),
        })
      })
    }
    const resp = await responseHandler(() => method())

    expect(resp).toBe(respData)
    done()
  })
  it('responseHandler 400 test', async (done) => {
    jest.spyOn(window, 'alert').mockImplementation(() => {})
    const statusText = 'Some error'
    const method = () => {
      return new Promise((resolve, reject) => {
        return resolve({
          status: 400,
          statusText,
        })
      })
    }

    const resp = await responseHandler(() => method())
    expect(`${JSON.stringify(resp)}`).toBe(`[]`)
    done()
  })
})

import React from 'react'
import BookedTimes from './index'
import renderer from 'react-test-renderer'

describe('Booked Times', () => {
  it('full of data', () => {
    const data1 = [
      { id: 319369, time: '2019-08-24T20:00:00-04:00', name: '333' },
      { id: 319369, time: '2019-08-25T10:30:00-04:00', name: '333' },
    ]
    const component = renderer.create(<BookedTimes data={data1} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('with no data', () => {
    const data1 = []
    const component = renderer.create(<BookedTimes data={data1} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

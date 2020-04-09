import React from 'react'
import AvailableTimes from './index'
import renderer from 'react-test-renderer'

describe('Available Times', () => {
  it('full of data', () => {
    const data1 = [
      { id: 417239, time: '2019-08-21T17:30:00-04:00' },
      { id: 399956, time: '2019-08-21T21:00:00-04:00' },
      { id: 399958, time: '2019-08-21T14:15:00-04:00' },
    ]
    const component = renderer.create(
      <AvailableTimes onChange={() => ({})} data={data1} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('with no data', () => {
    const data1 = []
    const component = renderer.create(
      <AvailableTimes onChange={() => ({})} data={data1} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

import React from 'react'
import BookForm from './index'
import renderer from 'react-test-renderer'

describe('Book Form', () => {
  it('component matches', () => {
    const component = renderer.create(<BookForm onChange={() => ({})} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

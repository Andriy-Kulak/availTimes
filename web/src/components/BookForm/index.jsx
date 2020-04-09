import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'

const BookForm = React.memo(({ onChange }) => {
  return (
    <>
      <Header isBig text="Book Time with an Advisor" />
      <form id="name-form" className="col-md-6">
        <div className="form-group">
          <label htmlFor="name-field">Your Name</label>
          <input
            type="text"
            id="name-field"
            className="form-control"
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </form>
    </>
  )
})

BookForm.propTypes = {
  onChange: PropTypes.func,
}

export default BookForm

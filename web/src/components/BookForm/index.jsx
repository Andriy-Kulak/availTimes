import React from 'react'
import Header from '../Header'

const BookForm = () => {
  return (
    <>
      <Header isBig text="Book Time with an Advisor" />
      <form id="name-form" className="col-md-6">
        <div className="form-group">
          <label htmlFor="name-field">Your Name</label>
          <input type="text" id="name-field" className="form-control" />
        </div>
      </form>
    </>
  )
}

export default BookForm

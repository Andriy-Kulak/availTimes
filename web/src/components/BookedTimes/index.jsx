import React from 'react'
import Header from '../Header'

const BookedTimes = () => {
  return (
    <>
      <Header text="Booked Times" />
      <table className="bookings table">
        <thead>
          <tr>
            <th>Advisor ID</th>
            <th>Student Name</th>
            <th>Date/Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>36232</td>
            <td>John Smith</td>
            <td>
              <time dateTime="2019-04-03T10:00:00-04:00">
                4/3/2019 10:00 am
              </time>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default BookedTimes

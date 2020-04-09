import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import { prettifyDate } from '../../utils/dataTransform'
import TableHeader from '../Table/Header'

const BookedTimes = React.memo(({ data }) => {
  return (
    <>
      <Header text="Booked Times" />
      <table className="bookings table">
        <TableHeader data={['Advisor ID', 'Student Name', 'Date/Time']} />
        <tbody>
          {data.map((x) => (
            <tr key={`${x.id}-${x.time}-${x.name}`}>
              <td>{x.id}</td>
              <td>{x.name}</td>
              <td>
                <time dateTime={x.time}>{prettifyDate(new Date(x.time))}</time>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
})

BookedTimes.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      time: PropTypes.string,
    })
  ),
}

export default BookedTimes

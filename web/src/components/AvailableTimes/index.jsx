import React from 'react'
import PropTypes from 'prop-types'
import TableHeader from '../Table/Header'
import Header from '../Header'

import { tansformAvail, prettifyDate } from '../../utils/dataTransform'

const AvailableTimes = React.memo(({ data, onChange, isDisabled, page }) => {
  const start = page * 10
  const finish = page * 10 + 10
  const paginatedData = data.slice(start, finish)
  console.log('paginatedData', { paginatedData, page, start, finish, data })
  const adjustedData = tansformAvail(paginatedData)
  return (
    <>
      <Header text="Available Times" />
      <table className="advisors table adv-table">
        <TableHeader data={['Advisor ID', 'Available Times']} />
        <tbody>
          {Object.keys(adjustedData).map((id) => (
            <tr key={id}>
              <td>{id}</td>
              <td>
                <ul className="list-unstyled">
                  {adjustedData[id].map((date) => (
                    <li key={date}>
                      <time dateTime={date} className="book-time">
                        {prettifyDate(new Date(date))}
                      </time>
                      <button
                        disabled={isDisabled}
                        className="book btn-small btn-primary"
                        onClick={() => onChange({ id, time: date })}
                      >
                        {isDisabled ? 'Loading' : 'Book'}
                      </button>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
})

AvailableTimes.propTypes = {
  onChange: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      time: PropTypes.string,
    })
  ),
}

export default AvailableTimes

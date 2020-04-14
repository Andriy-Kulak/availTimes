import React, { useState, useEffect } from 'react'
import { getAvailability, bookAdvisor, getBookings } from './utils/apiMethods'
import AvailableTimes from './components/AvailableTimes'
import BookForm from './components/BookForm'
import BookedTimes from './components/BookedTimes'

const App = () => {
  const [availableTimes, updateAvail] = useState([])
  const [userName, updateName] = useState('')
  const [isBookingLoading, updateBookingLoading] = useState(false) // added book loading state
  const [bookedTimes, updateBookings] = useState([])
  const [pagination, updatePage] = useState({
    current: 0,
    last: 0,
  })

  const updateAvailablity = async () => {
    const resp = await getAvailability()
    console.log('resp', resp)
    console.log('resp.length', resp.length)
    updateAvail(resp)
    updatePage({ ...pagination, last: Math.ceil(resp.length / 10) - 1 })
  }

  const getBookedTimes = async () => {
    const bookingsResp = await getBookings()
    updateBookings(bookingsResp)
  }

  const bookTime = async ({ id, time }) => {
    if (!userName) return window.alert('Please enter your name')
    if (!id || !time)
      return window.alert(
        'There was an issue with the booking. Please contact support'
      )
    updateBookingLoading(true)
    await bookAdvisor({ id: parseInt(id), time, name: userName })
    await updateAvailablity()
    updateBookingLoading(false)
    await getBookedTimes()
  }

  useEffect(() => {
    updateAvailablity()
    getBookedTimes()
  }, [])

  console.log('state', { isBookingLoading, availableTimes, pagination })
  const { current, last } = pagination
  return (
    <div className="App container">
      <BookForm onChange={updateName} />
      <AvailableTimes
        page={current}
        data={availableTimes}
        isDisabled={isBookingLoading}
        onChange={({ id, time }) => bookTime({ id, time })}
      />
      <button onClick={() => updatePage({ ...pagination, current: 0 })}>
        First
      </button>
      <button
        disabled={current === 0}
        onClick={() => updatePage({ ...pagination, current: current - 1 })}
      >
        Prev
      </button>
      <button
        disabled={current === last}
        onClick={() => updatePage({ ...pagination, current: current + 1 })}
      >
        Next
      </button>
      <button onClick={() => updatePage({ ...pagination, current: last })}>
        Last
      </button>
      <BookedTimes data={bookedTimes} />
    </div>
  )
}

export default App

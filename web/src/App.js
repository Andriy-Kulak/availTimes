import React, { useState, useEffect } from 'react'
import { getAvailability, bookAdvisor, getBookings } from './utils/apiMethods'
import AvailableTimes from './components/AvailableTimes'
import BookForm from './components/BookForm'
import BookedTimes from './components/BookedTimes'

const App = () => {
  const [availableTimes, updateAvail] = useState([])
  const [userName, updateName] = useState('')
  const [bookedTimes, updateBookings] = useState([])

  const updateAvailablity = async () => {
    const resp = await getAvailability()
    updateAvail(resp)
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
    await bookAdvisor({ id: parseInt(id), time, name: userName })
    getBookedTimes()
    updateAvailablity()
  }

  useEffect(() => {
    updateAvailablity()
    getBookedTimes()
  }, [])

  return (
    <div className="App container">
      <BookForm onChange={updateName} />
      <AvailableTimes
        data={availableTimes}
        onChange={({ id, time }) => bookTime({ id, time })}
      />
      <BookedTimes data={bookedTimes} />
    </div>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import { getAvailability } from './utils/apiMethods'
import AvailableTimes from './components/AvailableTimes'
import BookForm from './components/BookForm'
import BookedTimes from './components/BookedTimes'

const App = () => {
  const [appState, updateState] = useState({ data: [], today: null })

  const updateAvailablity = async () => {
    const resp = await getAvailability()
    updateState({ ...appState, data: resp.data })
  }

  useEffect(() => {
    updateAvailablity()
  }, [])

  const { data } = appState
  console.log('appState', appState)

  return (
    <div className="App container">
      <BookForm />
      <AvailableTimes data={data} />
      <BookedTimes />
    </div>
  )
}

export default App

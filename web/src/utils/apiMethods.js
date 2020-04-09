import { errorModal } from './errorHandling'
import { AVAILABILITY_URL, BOOK_URL } from '../constants'

export const getAvailability = () =>
  responseHandler(() => fetch(AVAILABILITY_URL))

export const bookAdvisor = async ({ id, time, name }) => {
  return responseHandler(() =>
    fetch(BOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, time, name }),
    })
  )
}

export const getBookings = async () =>
  responseHandler(() =>
    fetch(BOOK_URL, {
      method: 'GET',
    })
  )

export const responseHandler = async (fn) => {
  try {
    const resp = await fn()
    if (resp.status === 200) {
      const json = await resp.json()
      return json.data
    } else if (resp.status === 201) {
      const json = await resp.json()
      return json
    } else if (resp.status >= 400) {
      errorModal({ type: resp.status, moreInfo: resp.statusText })
      return []
    } else {
      errorModal()
      return []
    }
  } catch (e) {
    console.log('e', e)
    errorModal({ type: 500, moreInfo: e.message })
    return []
  }
}

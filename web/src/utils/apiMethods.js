import { AVAILABILITY_URL } from '../constants'
export const getAvailability = async () =>
  fetch(AVAILABILITY_URL).then((resp) => resp.json())

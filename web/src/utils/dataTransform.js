import { compareAsc, format } from 'date-fns'

export const tansformAvail = (data) => {
  const map = {}
  data.forEach((val) => {
    if (!map[val.id]) map[val.id] = []
    map[val.id].push(val.time)
  })
  for (let key in map) {
    map[key].sort((dateLeft, dateRight) =>
      compareAsc(new Date(dateLeft), new Date(dateRight))
    )
  }
  return map
}

export const prettifyDate = (date) => {
  try {
    return format(date, 'MM/dd/yyyy p')
  } catch (e) {
    console.log('There is an issue with date', e.message)
    return ''
  }
}

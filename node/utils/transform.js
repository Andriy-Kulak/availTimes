const swap = (json) => {
  const arr = []
  for (let key in json) {
    console.log('json[key]', json[key])
    arr.push({ id: json[key], time: key })
  }
  return arr
}

const transformAvail = (data) => {
  if (!data) return []

  const datesArray = Object.values(data)
  if (!datesArray || !datesArray.length) return []

  let ans = []

  datesArray.forEach((value) => {
    console.log('value', value)
    // console.log('swap(value)', swap(value))
    ans = [...ans, ...swap(value)]
  })
  return ans
}

module.exports = { transformAvail }

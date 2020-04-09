const swap = (json, checkAgainst) => {
  const arr = []
  for (let key in json) {
    // check if value is in bookedArray (checkedAgainst) already
    const val = checkAgainst.find(
      (el) => el.id === json[key] && el.time === key
    )

    // if a value is already booked, then don't push it into the array
    if (val) {
      continue
    }
    arr.push({ id: json[key], time: key })
  }
  return arr
}

const transformAvail = (data, checkAgainst = []) => {
  // console.log('checkAgainst', { data, checkAgainst })
  if (!data) return []

  const datesArray = Object.values(data)
  if (!datesArray || !datesArray.length) return []

  let ans = []

  datesArray.forEach((value) => {
    ans.push(...swap(value, checkAgainst))
  })

  return ans
}

module.exports = { transformAvail, swap }

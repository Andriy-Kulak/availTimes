const swap = (json) => {
  const arr = []
  for (let key in json) {
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
    ans.push(...swap(value))
  })

  return ans
}

module.exports = { transformAvail }

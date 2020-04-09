const swap = (json) => {
  const arr = []
  for (let key in json) {
    // const val = checkAgainst.find(
    //   (el) => el.id === json[key] && el.time === key
    // )
    // console.log('val', val)
    // if (val.length) continue
    arr.push({ id: json[key], time: key })
  }
  return arr
}

const transformAvail = (data, checkAgainst) => {
  if (!data) return []

  const datesArray = Object.values(data)
  if (!datesArray || !datesArray.length) return []

  let ans = []

  datesArray.forEach((value) => {
    ans.push(...swap(value, checkAgainst))
  })

  return ans
}

module.exports = { transformAvail }

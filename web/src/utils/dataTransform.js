export const dataTransform = (data) => {
  const map = {}
  data.forEach((val) => {
    if (!map[val.id]) map[val.id] = new Array()
    map[val.id].push(val.time)
  })
  return map
}

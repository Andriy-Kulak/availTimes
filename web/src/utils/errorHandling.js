export const errorModal = ({ type, moreInfo }) => {
  if (type && moreInfo) {
    return window.alert(
      `There was an error with the request. More info: ${type} ${moreInfo}`
    )
  }
  return window.alert(`There was an error with the request.`)
}

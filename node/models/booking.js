var { isValid } = require('date-fns')
// I would use  model/schema libary here. I.e. mongoose if we were using mongoDb
// Since we don't have a db, I am just validating the inputs manually

// I am making sure the values are required and valid type
const bookingSchema = ({ id, time, name }) => {
  if (typeof id !== 'number') throw new Error('Id is not a number')
  if (!isValid(new Date(time))) throw new Error('Time is not a valid date')
  if (typeof name !== 'string') throw new Error('Name is not a string')
  return
}

module.exports = bookingSchema

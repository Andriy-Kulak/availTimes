const express = require('express')
const router = express.Router()
const bookingSchema = require('../models/booking')

const state = []

router.get('/', getBookings, async (req, res) => {
  try {
    // I would retrieve the bookings here

    res.json({ data: res.bookings })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})
router.post('/', validateBody, async (req, res) => {
  try {
    console.log('req.body', req.body)
    const { id, time, name } = req.body

    const newBooking = { id, time, name }
    state.push(newBooking)
    res.status(201).json(newBooking)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

function validateBody(req, res, next) {
  try {
    bookingSchema(req.body)
  } catch (e) {
    return res.status(400).json({ message: e.message })
  }
  next()
}

function getBookings(req, res, next) {
  res.bookings = state
  next()
}

module.exports = router
module.exports.getBookings = getBookings

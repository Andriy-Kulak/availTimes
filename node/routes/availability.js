const express = require('express')
const router = express.Router()
const axios = require('axios')
const { getBookings } = require('./book')
const { transformAvail } = require('../utils/transform')

router.get('/', getBookings, async (req, res) => {
  try {
    // passing this to backend because of CORS
    const resp = await axios.get(
      'https://www.thinkful.com/api/advisors/availability'
    )
    res.json({
      data: resp.data ? transformAvail(resp.data, res.bookings) : [],
    })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

module.exports = router

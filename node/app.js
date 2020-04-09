const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require('axios')
const { transformAvail } = require('./utils/transform')
const bookRouter = require('./routes/book')

// set up router
const router = express.Router()
module.exports = router

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/api/advisors/availability', async (req, res) => {
  try {
    // passing this to backend because of CORS
    const resp = await axios.get(
      'https://www.thinkful.com/api/advisors/availability'
    )
    res.json({
      data: resp.data ? transformAvail(resp.data) : [],
    })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

app.use('/api/book', bookRouter)
app.today = () => new Date()
app.listen(4433, () => console.log('server started'))
module.exports = app

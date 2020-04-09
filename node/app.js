const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require('axios')
const { transformAvail } = require('./utils/transform')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/today', (req, res) => {
  res.send({
    today: today(),
  })
})
app.get('/api/advisors/availability', async (req, res) => {
  // passing this to backend because of CORS
  const resp = await axios.get(
    'https://www.thinkful.com/api/advisors/availability'
  )
  res.send({
    data: resp.data ? transformAvail(resp.data) : [],
  })
})

function today() {
  return new Date().toLocaleDateString()
}

app.today = today

app.listen(4433)
module.exports = app

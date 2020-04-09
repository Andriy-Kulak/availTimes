const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const bookRouter = require('./routes/book')
const availRouter = require('./routes/availability')

// set up router
const router = express.Router()
module.exports = router

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use('/api/advisors/availability', availRouter)
app.use('/api/book', bookRouter)

app.today = () => new Date()
app.listen(4433, () => console.log('server started'))
module.exports = app

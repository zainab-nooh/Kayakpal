require('dotenv').config()
const app = require('./app')
const db = require('./models/db')
const PORT = process.env.PORT || 3000

db.once('open', () => {
    console.log('connected to mongoDB')
})

db.on('error', (error) => {
  console.error(error.message)
})

app.listen(PORT, () => {
    console.log(`We in the building in ${PORT}`)
})
require('dotenv').config({ path: './src/.env' })
const express = require('express');
const { join } = require('path')
const { router } = require('./routes/routes')

const app = express();

app.use(express.json())
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use('/static', express.static(join(__dirname, 'public')))

app.use('/', router)

app.get('/*', (_, res) => {
  res.sendStatus(404)
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


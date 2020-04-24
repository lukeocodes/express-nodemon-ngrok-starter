// src/devApp.js

require('dotenv').config()

const nodemon = require('nodemon')
const ngrok = require('ngrok')
const port = process.env.PORT || 3000

nodemon({
  script: 'src/app.js',
  ext: 'js json'
})

let url = null

nodemon.on('start', async () => {
  if (!url) {
    url = await ngrok.connect({ port: port })
    console.log(`Server now available at ${url}`)
  }
}).on('quit', async () => {
  await ngrok.kill()
})
// ازاي نشغل السرفير
const express = require('express')
const app = express()
const port = 4200
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})
app.listen(port,()=> console.log(`server raning on http://localhost${port}`) )
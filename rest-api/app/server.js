const express = require("express")
const app = express()

let id = 0

app.get("/api/greeting/:name?", (req, res) => {
  let name = "World"
  if (req.params.name) {
    name = req.params.name;
  }
  const greeting = `Hello ${name}!`
  res.json({
    id: ++id,
    content: greeting
  })
})

const port = process.env.PORT || 8080

let server = app.listen(port, () => {
  console.log(`greeting-api listening on ${port}`)
})

module.exports = server
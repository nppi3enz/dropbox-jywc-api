const express = require('express')
const app = express()
var port = process.env.PORT || 4000;

app.get('/', (req, res) => res.send(`Hello World! from ${port}`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

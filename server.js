const express = require('express')
const app = express()
app.use(express.json())



const dokumentacija=require('./routes/dokumentacija')
const filmovi = require('./routes/filmovi')
const serije = require('./routes/serije')
const glumci = require('./routes/glumci')


app.use('/',dokumentacija)
app.use('/api/v1/filmovi', filmovi)
app.use('/api/v1/serije', serije)
app.use('/api/v1/glumci', glumci)

app.listen(4000, () => console.log('Server is listening on port 4000'))

const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 8000;

const app = express()

app.get('/', (req, res)=>{
    res.status(200).send('server is up');
})

app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`)
})
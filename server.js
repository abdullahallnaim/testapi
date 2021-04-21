const express = require('express');
require('dotenv').config()

// app
const app = express();

// middleware
app.use('/', (req, res) => {
    res.json({
        status: 'active',
        msg: 'it works'
    })
})

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log('app is running');
})
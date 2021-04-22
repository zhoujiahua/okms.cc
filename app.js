const express = require('express');
const path = require('path');
const app = express();

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/upload', express.static(path.join(__dirname, 'upload')));

// Used body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hi node...')
})

const port = process.env.PORT || 5000;
app.listen(port, async () => {
    await require('./utils/DBConnect')();
    console.log('Start server on:http://localhost:' + port);
})
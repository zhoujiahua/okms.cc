const appRoot = require('app-root-path');
const express = require('express');
const path = require('path');
const app = express();

// Used app root path
global.$at = appRoot;
global.$re = appRoot.require;

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/upload', express.static(path.join(__dirname, 'upload')));

// Used body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Used Initialize
require('./middleware/initialize')(app);

// Used reference
app.use(require('./middleware/reference'));

// Used API 
require('./apis/base')(app);

// Used View
require('./routers/base')(app);

const port = process.env.PORT || 5000;
app.listen(port, async () => {
    await require('./utils/DBConnect')();
    console.log('Start server on:http://localhost:' + port);
})
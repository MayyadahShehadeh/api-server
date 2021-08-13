'use strict';
// 1st level packages -> we did not install anything
// 3rd party packages
const express = require('express');
// local modules
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middlewares/logger');
const foodRoutes = require('./routes/food');
const clothesRoutes = require('./routes/clothes');

const app = express();
// Global Middlewares
app.use(express.json()); // access the body
// app.use(cors()); install the package
app.use(logger);
// Use our routes form the routing module 
app.use(foodRoutes);
app.use(clothesRoutes);


function start(port) {
    app.listen(port, ()=> console.log(`Running on Port ${port}`))
}

app.get('/', (req, res)=> {
    res.send('this is home page!!! :D :D :D')
});


app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}
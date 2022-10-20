const express = require('express');
const cors = require('cors');
const app = express();
const port = 5050;
const customerApi = require('./app/api/customerApi');
const customerEventApi = require('./app/api/customerEventApi');

app.use(cors());

app.use(express.json());

app.use('/api/customer', customerApi)
app.use('/api/customerEvent', customerEventApi)


app.listen(port)
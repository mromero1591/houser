require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

const app = express();
app.use(bodyParser.json());

//Const variables
const PORT =  process.env.SERVER_PORT;

//const PORT = 4000;

app.listen(PORT, function() {
    console.log(`listening at port ${PORT}`);
})

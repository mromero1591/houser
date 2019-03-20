require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const housesController = require('./house_controller/house_controller');

const app = express();
app.use(bodyParser.json());

const {SERVER_PORT, DATABASE_URL} = process.env;

massive(DATABASE_URL, {scripts: __dirname+'/db'})
.then(dbInstance => {
    app.set('db', dbInstance);
}).catch( err => {
    console.log('faced error connecting to database', err);
})

//END Points
app.get('/api/houses', housesController.get);
app.post('/api/houses', housesController.add);
app.delete('/api/houses/:id', housesController.delete);

app.listen(SERVER_PORT, function() {
    console.log(`listening at port ${SERVER_PORT}`);
})

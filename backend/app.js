const express = require('express');
const cors = require('cors')
const shipment_route = require('./routes/shipment_route')

require('./conn/db_connection')
require('dotenv').config()

const port = process.env.PORT || 3000;
const base_url = process.env.BASE_URL;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(`${base_url}/shipment`,shipment_route);

app.listen(port, () =>{
    console.log(`app is listening on port number ${port}`);
});
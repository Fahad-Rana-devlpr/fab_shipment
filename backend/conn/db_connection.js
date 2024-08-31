const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.CONN;
mongoose.connect(uri);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('DataBase successfully connected.')
});

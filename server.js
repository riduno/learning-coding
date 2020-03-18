const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const trackerRoutes = require('./routers/tracker.router');

const app = express();
const url = process.env.MONGODB_URL || 'mongodb://localhost:27017/test';
const port = process.env.PORT || 3000;
// const dbName = 'test';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.set('view engine', 'ejs');

const connect = async () => {
  try {
    // const db = await mongoose.connect(`${url}/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
    const db = await mongoose.connect(`${url}`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
    console.log('database connected successfully...');
  } catch (error) {
    console.log(`Connect database failed. error: ${error}`);
    process.exit();
  }
}

trackerRoutes(app);

connect();

app.listen(port, (err, data) => {
  if (err) throw err;
  console.log(`Servernya lari diport: ${port}`);
});
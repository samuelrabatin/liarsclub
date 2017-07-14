const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');

var db;

MongoClient.connect('mongodb://samuelrabatinuser1:mongouser1@ds028310.mlab.com:28310/liars_club', (err, database) => {
  if (err) return console.log(err);
  db = database;
  app.listen(process.env.PORT || 8000, () => {
    console.log('listening on 8000');
  });
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('dist'));

app.get('/users', (req, res) => {
  db.collection('users').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.send(result);
  });
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
})

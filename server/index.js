'use strict';
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const { UserEntries } = require('./models');

const { DATABASE_URL, PORT } = require('./config');

app.use(morgan('common'));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());

// API endpoints go here!

app.get('/api/userEntries', (req, res) => {
  UserEntries.find()
    .then(entries => res.json(entries.map(entry => entry.apiRepr())))
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    });
});

app.post('/api/userEntries', (req, res) => {
  console.log('req.body is....');
  console.log(req.body);
  // const requiredFields = ['userName'];
  // let message;

  // for (let i = 0; i < requiredFields.length; i++) {
  //   const field = requiredFields[i];
  //   if (!(field in req.body)) {
  //     message = `Missing \`${field}\` in request body`;
  //     console.error(message);
  //     return res.status(400).send(message);
  //   }
  // }

  UserEntries.create({
    userName: req.body.username,
    emotion: req.body.emotion,
    comment: req.body.comment,
    timeOfEvent: req.body.timeOfEvent
  })
    .then(userEnt => res.status(201).json(userEnt.apiRepr()))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Something went wrong' });
    });
});

// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
  const index = path.resolve(__dirname, '../client/build', 'index.html');
  res.sendFile(index);
});

let server;
function runServer(databaseUrl = DATABASE_URL, port = 3001) {
  return new Promise((resolve, reject) => {
    mongoose.connect('mongodb://dev:devdev@ds161021.mlab.com:61021/emotions-man-up', err => {
      if (err) {
        return reject(err);
      }
      server = app
        .listen(port, () => {
          console.log(`Your app is listening on port ${port}`);
          resolve();
        })
        .on('error', err => {
          mongoose.disconnect();
          reject(err);
        });
    });
  });
}

// this function closes the server, and returns a promise. we'll
// use it in our integration tests later.
function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
  runServer();
}

module.exports = {
  app,
  runServer,
  closeServer
};

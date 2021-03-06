const express = require('express');
const parseArray = require('./helpers/parsearray');

const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {Trip} = require('./model');
mongoose.Promise = global.Promise;

const {DATABASE_URL, PORT} = require('./config');
const jsonParser = bodyParser.json();

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/new', (request, response) => {
  response.sendFile(path.join(__dirname, '/views/new.html'));
});

app.get('/history', (request, response) => {
  response.sendFile(path.join(__dirname, '/views/history.html'));
});

app.get('/edit/:id', (request, response) => {
  response.sendFile(path.join(__dirname, '/views/edit.html'));
});

let server;

function runServer () {
  return new Promise((resolve, reject) => {
    mongoose.connect(DATABASE_URL, err => {
      if (err) {
        return reject(err);
      }
    });

    server = app.listen(PORT, () => {
      console.log(`Your app is listening on port ${PORT}`);
      resolve(server);
    }).on('error', err => {
      mongoose.disconnect();
      reject(err);
    });
  });
}

function closeServer () {
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
  runServer().catch(err => console.error(err));
}

app.get('/trips', (req, res) => {
  Trip
    .find()
    .then(trips => {
      console.log(trips);
      res.json(trips.map(trip => trip.apiRepr()));
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went terribly wrong'});
    });
});

app.get('/trips/:id', (req, res) => {
  Trip
    .findById(req.params.id)
    .then(trip => res.json(trip.apiRepr()))
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went horribly awry'});
    });
});

app.post('/trips', jsonParser, (req, res) => {
  if (!(req.body.title)) {
    const message = `Missing title in request body`;
    console.error(message);
    return res.status(400).send(message);
  }

  Trip
    .create({
      title: req.body.title,
      place: req.body.place,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      transportation: parseArray(req.body.transportation, 'transType', 'transInformation'),
      residence: parseArray(req.body.residence, 'residenceName', 'residenceInformation'),
      restaurants: parseArray(req.body.restaurants, 'restaurantName', 'restaurantInformation'),
      activities: parseArray(req.body.activities, 'activityName', 'activityInformation')
    })
    .then(trip => res.status(201).json(trip.apiRepr()))
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'Something went wrong'});
    });
});

app.delete('/trips/:id', (req, res) => {
  Trip
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).json({message: 'success'});
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went terribly wrong'});
    });
});

app.put('/trips/:id', jsonParser, (req, res) => {
  if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
    res.status(400).json({
      error: `Request path id and request body id values must match ${req.body.id} and ${req.params.id}`
    });
  }
  const updated = {};
  const updateableFields = ['title', 'place', 'startDate', 'endDate'];
  updateableFields.forEach(field => {
    updated[field] = req.body[field];
  });

  updated[`transportation`] = parseArray(req.body.transportation, 'transType', 'transInformation');
  updated[`residence`] = parseArray(req.body.residence, 'residenceName', 'residenceInformation');
  updated[`restaurants`] = parseArray(req.body.restaurants, 'restaurantName', 'restaurantInformation');
  updated[`activities`] = parseArray(req.body.activities, 'activityName', 'activityInformation');

  Trip
    .findByIdAndUpdate(req.params.id, {$set: updated}, {new: true})
    .then(updatedPost => res.status(204).end())
    .catch(err => res.status(500).json({message: 'Something went wrong'}));
});

app.delete('/:id', (req, res) => {
  Trip
    .findByIdAndRemove(req.params.id)
    .then(() => {
      console.log(`Deleted blog post with id \`${req.params.ID}\``);
      res.status(204).end();
    });
});

app.use('*', function (req, res) {
  res.status(404).json({message: 'Not Found'});
});

module.exports = {app, runServer, closeServer};

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const tripsRouter = require('./tripsRouter');
const {Trip} = require('./model');
mongoose.Promise = global.Promise;

const {DATABASE_URL, PORT} = require('./config');
const jsonParser = bodyParser.json();

app.use(express.static('views'));
app.use(express.static('public'));
app.use(bodyParser.json());
//app.use('/trips', tripsRouter)

app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/new", (request, response) => {
  response.sendFile(path.join(__dirname + '/views/new.html'));
});

app.get("/history", (request, response) => {
  response.sendFile(path.join(__dirname + '/views/history.html'));
});

app.get("/edit/:id", (request, response) => {
  response.sendFile(path.join(__dirname + '/views/edit.html'));
});

let server;

function runServer() {
  return new Promise((resolve, reject) => {
    mongoose.connect(DATABASE_URL, err => {
      if(err) {
        return reject(err);
      }
    })

    server = app.listen(PORT, () => {
      console.log(`Your app is listening on port ${PORT}`);
      resolve(server);
    }).on('error', err => {
      mongoose.disconnect();
      reject(err);
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if(err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if(require.main === module) {
  runServer().catch(err => console.error(err));
};


//////////////


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
  console.log(res);
    // if (!(req.body.title)) {
    //   const message = `Missing title in request body`
    //   console.error(message);
    //   return res.status(400).send(message);
    // }
  //add in the parseArray function
  Trip
    .create({
      title: req.body.title,
      place: req.body.place,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      transportation: parseArray('transType', 'transInformation', req.body.transportation);
      residence: parseArray('residenceName', 'residenceInformation', req.body.residence);
      restaurants: parseArray('restaurantName', 'restaurantInformation', req.body.restaurants);
      activities: parseArray('activityName', 'activityInformation', req.body.activities);
      // transportation: [{
      //     transType: req.body.transType,
      //     transInformation: req.body.transInformation}],
      // residence: [{
      //     residenceName: req.body.residenceName,
      //     residenceInformation: req.body.residenceInformation}],
      // restaurants: [{
      //     restaurantName: req.body.restaurantName,
      //     restaurantInformation: req.body.restaurantInformation}],
      // activities: [{
      //     activityName: req.body.activityName,
      //     activtiyInformation: req.body.activtiyInformation}]
    })
    .then(trip => res.status(201).json(trip.apiRepr()))
    .catch(err => {
        console.error(err);
        res.status(500).json({error: 'Something went wrong'});
    });
});

function parseArray(firstKey, secondKey, keyObject) {
  let array = [];

  console.log(keyObject);
  return array;
}


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
      error: 'Request path id and request body id values must match'
    });
  }
  const updated = {};
  const updateableFields = ['id','title', 'place', 'startDate', 'endDate', 'transType', 'transInformation', 'residenceName', 'residenceInformation', 'restaurantName', 'restaurantInformation', 'activityName', 'activityInformation'];
  updateableFields.forEach(field => {
    if (field in req.body) {
      updated[field] = req.body[field];
      //add logic if it is within an array
    }
  });

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


app.use('*', function(req, res) {
  res.status(404).json({message: 'Not Found'});
});


module.exports = {app, runServer, closeServer};

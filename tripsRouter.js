// const bodyParser = require('body-parser');
// const express = require('express');
// const mongoose = require('mongoose');
// const morgan = require('morgan');
// const router = express.Router();
//
// const {Trips} = require('./model');
//
// const app = express();
//
// app.use(morgan('common'));
// app.use(bodyParser.json());
//
// mongoose.Promise = global.Promise;
//
// app.get('/trips', (req, res) => {
//   Trips
//     .findAll()
//     .then(trips => {
//       res.json(trips.map(post => trips.apiRepr()));
//     })
//     .catch(err => {
//       console.error(err);
//       res.status(500).json({error: 'something went terribly wrong'});
//     });
// });
//
// app.get('/trips/:id', (req, res) => {
//   Trips
//     .findById(req.params.id)
//     .then(trip => res.json(trip.apiRepr()))
//     .catch(err => {
//       console.error(err);
//       res.status(500).json({error: 'something went horribly awry'});
//     });
// });
//
// app.post('/trips', (req, res) => {
//   const requiredFields = ['title'];
//   for (let i=0; i<requiredFields.length; i++) {
//     const field = requiredFields[i];
//     if (!(field in req.body)) {
//       const message = `Missing \`${field}\` in request body`
//       console.error(message);
//       return res.status(400).send(message);
//     }
//   }
//
//   Trips
//     .create({
//       title: req.body.title,
//       place: req.body.place,
//       "startDate": req.body.startDate,
//       "endDate": req.body.endDate,
//       "transportation": [{
//           transType: req.body.transType,
//           transInformation: req.body.transInformation}],
//       "residence": [{
//           residenceName: req.body.residenceName,
//           residenceInformation: req.body.residenceInformation}],
//       "restaurants": [{
//           restaurantName: req.body.restaurantName,
//           restaurantInformation: req.body.restaurantInformation}],
//       "activities": [{
//           activityName: req.body.activityName,
//           activtiyInformation: req.body.activtiyInformation
//       }]
//
//     })
//     .then(trip => res.status(201).json(trip.apiRepr()))
//     .catch(err => {
//         console.error(err);
//         res.status(500).json({error: 'Something went wrong'});
//     });
// });
//
//
// app.delete('/trips/:id', (req, res) => {
//   Trips
//     .findByIdAndRemove(req.params.id)
//     .then(() => {
//       res.status(204).json({message: 'success'});
//     })
//     .catch(err => {
//       console.error(err);
//       res.status(500).json({error: 'something went terribly wrong'});
//     });
// });
//
//
// app.put('/trips/:id', (req, res) => {
//   if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
//     res.status(400).json({
//       error: 'Request path id and request body id values must match'
//     });
//   }
//   const updated = {};
//   const updateableFields = ['title', 'place', 'startDate', 'endDate', 'transType', 'transInformation', 'residenceName', 'residenceInformation', 'restaurantName', 'restaurantInformation', 'activityName', 'activityInformation'];
//   updateableFields.forEach(field => {
//     if (field in req.body) {
//       updated[field] = req.body[field];
//       //add logic if it is within an array
//     }
//   });
//
//   Trips
//     .findByIdAndUpdate(req.params.id, {$set: updated}, {new: true})
//     .then(updatedPost => res.status(204).end())
//     .catch(err => res.status(500).json({message: 'Something went wrong'}));
// });
//
// app.delete('/:id', (req, res) => {
//   Trips
//     .findByIdAndRemove(req.params.id)
//     .then(() => {
//       console.log(`Deleted blog post with id \`${req.params.ID}\``);
//       res.status(204).end();
//     });
// });
//
//
// app.use('*', function(req, res) {
//   res.status(404).json({message: 'Not Found'});
// });
//
// module.exports = router;

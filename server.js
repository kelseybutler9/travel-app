const express = require('express');
const app = express();

app.use(express.static('public'));

var MOCK_TRIP_UPDATES = {
    "trip": [
        {
            "id": "1111111",
            "location": "Chicago, Illinois",
            "startDate": 10201992,
            "endDate": 10301992,
            "travel": [{
              airport: "Midway",
              travelInformation: "Afternoon flight, $700" }],
            "residence": [
              stay: "Hilton Inn",
              residenceComments: "nice staff, clean room"}],
            "restaurants": [{
              name: "Taco Bell",
              comments: "great burritos" }],
            "activities": [{
              name: "Surfing",
              activtiyInformation: "Fun!"
            }]
        },
        {
            "id": "1111111",
            "location": "Chicago, Illinois",
            "startDate": 10201992,
            "endDate": 10301992,
            "travel": [{
              airport: "Midway",
              travelInformation: "Afternoon flight, $700" }],
            "residence": [
              stay: "Hilton Inn",
              residenceComments: "nice staff, clean room"}],
            "restaurants": [{
              name: "Taco Bell",
              comments: "great burritos" }],
            "activities": [{
              name: "Surfing",
              activtiyInformation: "Fun!"
            }]
        },
        {
            "id": "1111111",
            "location": "Chicago, Illinois",
            "startDate": 10201992,
            "endDate": 10301992,
            "travel": [{
              airport: "Midway",
              travelInformation: "Afternoon flight, $700" }],
            "residence": [
              stay: "Hilton Inn",
              residenceComments: "nice staff, clean room"}],
            "restaurants": [{
              name: "Taco Bell",
              comments: "great burritos" }],
            "activities": [{
              name: "Surfing",
              activtiyInformation: "Fun!"
            }]
        },
        {
            "id": "1111111",
            "location": "Chicago, Illinois",
            "startDate": 10201992,
            "endDate": 10301992,
            "travel": [{
              airport: "Midway",
              travelInformation: "Afternoon flight, $700" }],
            "residence": [
              stay: "Hilton Inn",
              residenceComments: "nice staff, clean room"}],
            "restaurants": [{
              name: "Taco Bell",
              comments: "great burritos" }],
            "activities": [{
              name: "Surfing",
              activtiyInformation: "Fun!"
            }]
        }
    ]
};


let server;

function runServer() {
  const port = process.env.PORT || 8080;
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      console.log(`Your app is listening on port ${port}`);
      resolve(server);
    }).on('error', err => {
      reject(err);
    });
  });
}

function closeServer() {
  return new Promise((resolve, reject) => {
    console.log('Closing server');
    server.close(err => {
      if(err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

if(require.main === module) {
  runServer().catch(err => console.error(err));
};

module.exports = {app, runServer, closeServer};

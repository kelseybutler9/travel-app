const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/new", (request, response) => {
  response.redirect(__dirname + '/new.html');
});

app.get("/past-trips", (request, response) => {
  response.redirect(__dirname + '/views/history.html');
});

app.get("/edit", (request, response) => {
  response.redirect(__dirname + '/edit.html');
});

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

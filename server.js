
const express = require('express');
const db = require('./config/configuration.js');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001


app.use(routes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// App PORT set with production check
const PORT = process.env.PORT || 5000;

// Route includes
const forumRouter = require('./routes/forum.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

// Routes
app.use('/forum', forumRouter);

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
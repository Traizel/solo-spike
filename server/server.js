require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// App PORT set with production check
const PORT = process.env.PORT || 5000;

// Route includes
const forumRouter = require('./routes/forumRouter');
const userRouter = require('./routes/userRouter');
const threadRouter = require('./routes/threadRouter');
const postRouter = require('./routes/postRouter');
const commentsRouter = require('./routes/commentsRouter');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

// Routes
app.use('/api/forum', forumRouter);
app.use('/api/users', userRouter);
app.use('/api/threads', threadRouter);
app.use('/api/posts', postRouter);
app.use('/api/comments', commentsRouter);

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
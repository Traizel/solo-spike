const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/', (req, res) => {
  // return all categories
  const comments = req.body.id;
  console.log(comments);
  console.log('Getting Comments..');
  const query = `SELECT * FROM "forum_comments"
                    WHERE thread_id = $1`;
  pool
    .query(query, [comments])
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;
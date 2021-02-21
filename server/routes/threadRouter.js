const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/', (req, res) => {
  // return all categories
  const category = req.body.id;
  console.log(category);
  console.log('Getting Threads..');
  const query = `SELECT * FROM "forum_thread"
                    WHERE category_id = $1`;
  pool
    .query(query, [category])
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
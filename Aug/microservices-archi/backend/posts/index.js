// posts

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const randomBytes = require('randombytes');
// utils
app.use(bodyParser.json());
app.use(cors());

// In memory data
const everyPosts = {};

// Routes
/** GET
 * @ /posts
 * @ Method - GET
 * @ Goal - to store title in memory
 */
app.get('/posts', (req, res) => {
  res.status(200).send(everyPosts);
});

/** POST
 * @ /posts
 * @ Method - POST
 * @ Goal - to store title in memory
 */

app.post('/posts', (req, res) => {
  const postId = randomBytes(4).toString('hex');
  const { title } = req.body;

  everyPosts[postId] = {
    postId,
    title,
  };

  res.status(201).send(everyPosts[postId]);
});

app.listen(4000, () => {
  console.log(`Port Running On 4000`);
});

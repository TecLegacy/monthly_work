// Comments
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const randomBytes = require('randombytes');

// utils
app.use(bodyParser.json());
app.use(cors());

// In memory data - { postId - [{id,comments}]}
const commentById = {};

// Routes
/** GET
 * @ /posts/id/comments
 * @ Method - GET
 * @ Goal - send All Comments
 */
app.get('/posts/:id/comments', (req, res) => {
  res.status(200).send(commentById[req.params.id] || 'Comments not Found!');
});

/** POST
 * @ /posts
 * @ Method - POST
 * @ Goal - to store comments with id in memory
 */

app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  const { data } = req.body;
  const postId = req.params.id;

  // Check of existing comments || []
  const comment = commentById[postId] || [];
  commentById[postId] = comment;
  comment.push({
    commentId,
    comment: data,
  });

  res.status(201).send(commentById[postId]);
});

app.listen(4001, () => {
  console.log(`Port Running On 4001`);
});

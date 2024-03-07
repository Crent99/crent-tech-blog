const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Ravens Choked",
    "postContent": "Best team in the league and we lose to Kermit the frog and Taylor Swifts boyfriend, THATS CRAZYYYY",
    "userId": 1
  },
  {
    "postTitle": "Run the ball",
    "postContent": "Best rush offense in the legaue and you give it to your running backs only SIX TIMES, WHYYYYYYYYYYY?!?!?!?!?! ",
    "userId": 2
  },
  {
    "postTitle": "Im still in pain",
    "postContent": "Why Lamar why(its not your fault. Todd Monken, RUN THE BALL BROTHER",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
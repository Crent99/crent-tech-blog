const { User } = require('../models');

const userdata =
[
  {
    "username": "Crent99",
    "password": "password123"
  },
  {
    "username": "Madkins93",
    "password": "password1234"
  },
  {
    "username": "Btener96",
    "password": "password12345"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;
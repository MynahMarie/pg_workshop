const connect = require('./../database/db_connection');

const createUser = (username, location, callback) => {
  connect.query('INSERT INTO users (name, location) VALUES ($1, $2)',
  [username, location], (err, res) => {
    if (err) {
      return callback(err);
    }
    const success = `User ${username} and location ${location} has been successfully created.`;
    callback(null, success);
  });
}

module.exports = createUser;

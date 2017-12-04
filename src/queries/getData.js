const connect = require('./../database/db_connection');

const getData = callback => {
  connect.query(`SELECT * FROM users`, (err, res) => {
    if (err) {
      return callback(err);
    }
    const { rows: users } = res;
    callback(null, users);
  });
}

module.exports = getData;

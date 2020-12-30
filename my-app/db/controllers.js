const { pool } = require('./connection.js');

const getDogs = (req, res) => {
  pool.query('Select * from dogs', (err, results) => {
      if (err) {
        throw err;
      }
      res.status(200).json(results.rows);
    });
}

const addDog = (req, res) => {
  console.log(req.body);
  const {petname, url, lat, lon, city, time, contactno, description} = req.body;

  pool.query(
    `INSERT INTO dogs (petname, url, lat, lon, city, time, contactno, description) VALUES 
    ($1, $2, $3, $4, $5, $6, $7, $8)`,
    [petname, url, lat, lon, city, time, contactno, description],
    (err, results) => {
      if (err) {
        throw err;
      }
      res.sendStatus(201);
    });
}

module.exports = {
  getDogs,
  addDog
}

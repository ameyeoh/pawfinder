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
  // to modify
  const {url, furcolor, lat, lon, contactno, description} = req.body;

  // const {picName, furcolor, address, contactno, description} = req.body;

  // compute url
  // const url = `https://fec-ay.s3-us-west-1.amazonaws.com/${picName}.jpg`

  // use google maps api to get lat and lon based on address OR based on form submission

  pool.query(
    `INSERT INTO dogs (url, furcolor, lat, lon, contactno, description) VALUES 
    ($1, $2, $3, $4, $5, $6)`,
    [url, furcolor, lat, lon, contactno, description],
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

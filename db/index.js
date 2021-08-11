const { Pool } = require('pg')
require("dotenv").config();


/* const proConfig = {
  connectionString: process.env.DATABASE_URL, //heroku addons
} */


 const devConfig = {

user: 'adamoreilly',
password: 'adamoreilly',
host: 'aai5k06lr5krw1.cisjn8ovvl3t.us-west-2.rds.amazonaws.com',
database: 'ebdb',
port: 5432
}


  
  const pool = new Pool(
    devConfig
  );




module.exports = {
  
  query: (text, params) => pool.query(text, params),
}
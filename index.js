const { Pool } = require('pg')


const proConfig = {
  connectionString: process.env.DATABASE_URL //heroku addons
}


 const devConfig = {
user: process.env.PG_USER,
password: process.env.PG_PASSWORD,
host: process.env.PG_HOST,
database: process.env.PG_DATABASE,
port: process.env.PG_PORT
}

const pool = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);

module.exports = {
  query: (text, params) => pool.query(text, params),
}
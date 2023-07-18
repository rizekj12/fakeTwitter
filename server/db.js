const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "twitterpass",
  host: "fake-twitter.ctm48954vust.us-east-1.rds.amazonaws.com",
  port: 5432,
  database: "fake_twitter_test",
});

module.exports = pool;

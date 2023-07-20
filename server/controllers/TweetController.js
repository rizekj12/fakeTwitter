const pool = require("../db");

// Create a new tweet
const CreateTweet = async (req, res) => {
  try {
    console.log("Received data:", req.body); // Add this line to check the received data
    const { text, user_id } = req.body;
    const newTweet = await pool.query(
      "INSERT INTO tweet (text, user_id) VALUES ($1, $2) RETURNING *",
      [text, user_id]
    );
    // This indicates that the request was successful and a resource was created
    const createdTweet = newTweet.rows[0];
    res.status(201).json(createdTweet);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
};

// Get all tweets
const GetAllTweets = async (req, res) => {
  try {
    const allTweets = await pool.query("SELECT * FROM tweet");
    res.json(allTweets.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
};

// Get a tweet
const GetTweetById = async (req, res) => {
  try {
    const { id } = req.params;
    const tweet = await pool.query("SELECT * FROM tweet WHERE tweet_id = $1", [
      id,
    ]);
    res.json(tweet.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

// Update a tweet
const UpdateTweet = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    const updateTweet = await pool.query(
      "UPDATE tweet SET text = $1 WHERE tweet_id = $2",
      [text, id]
    );

    res.json("Tweet was updated!");
  } catch (err) {
    console.error(err.message);
  }
};

// Delete a tweet
const DeleteTweet = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTweet = await pool.query(
      "DELETE FROM tweet WHERE tweet_id = $1",
      [id]
    );
  } catch (err) {
    console.error(err.message);
  }
  res.json("Tweet was deleted!");
};

module.exports = {
  GetAllTweets,
  GetTweetById,
  CreateTweet,
  UpdateTweet,
  DeleteTweet,
};

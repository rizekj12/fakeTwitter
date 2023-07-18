const router = require("express").Router();
const controller = require("../controllers/TweetController");

// const middleware = require('../middleware')

router.get("/", controller.GetAllTweets);
router.get("/:id", controller.GetTweetById);
router.post("/", controller.CreateTweet);
router.put("/:id", controller.UpdateTweet);
router.delete("/:id", controller.DeleteTweet);

module.exports = router;

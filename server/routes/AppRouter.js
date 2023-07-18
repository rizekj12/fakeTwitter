const Router = require("express").Router();
const TweetRouter = require("./TweetRouter");

// const AuthRouter = require('./AuthRouter')
// Router.use('/auth', AuthRouter)

Router.use("/tweets", TweetRouter);

module.exports = Router;

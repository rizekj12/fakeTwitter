import HomePage from "./pages/HomePage";
import Main from "./pages/Main";
import SignUp from "./pages/SignUpPage";

import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import Sidebar from "./components/Sidebar";

import Tweet from "./components/Tweet.jsx";
import tweetData from "./data/tweetData.json";
import { useState, useEffect } from "react";

function App({ signOut, user }) {
  const [tweetQuery, setTweetQuery] = useState([]);

  useEffect(() => {
    setTweetQuery(tweetData);
  }, []);

  /* src/App.js */
  // function App({ signOut, user }) {
  //   // ...
  // }
  console.log(tweetQuery);

  return (
    <>
      <Heading level={1}>Hello {user.username}</Heading>
      <Button onClick={signOut}>Sign out</Button>

      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      {tweetQuery.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}

      {/* Widgets */}

      {/* <h2>Amplify Todos</h2> */}
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/account-home"} element={<HomePage />} />
        <Route path={"/login-page"} element={<LoginPage />} />
        <Route path={"/signup-page"} element={<SignUp />} />
      </Routes>
    </>
  );
}

export default withAuthenticator(App);

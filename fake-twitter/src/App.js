import HomePage from "./pages/HomePage";
import Main from "./pages/Main";
import SignUp from "./pages/SignUpPage";

import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import Feed from "./components/Feed";
import Post from "./components/Post";
import { useState } from "react";

function App({ signOut, user }) {
  const [postQuery, setPostQuery] = useState({});

  /* src/App.js */
  // function App({ signOut, user }) {
  //   // ...
  // }
  return (
    <>
      <Heading level={1}>Hello {user.username}</Heading>
      <Button onClick={signOut}>Sign out</Button>

      <Feed postQuery={postQuery} />
      <Post setPostQuery={setPostQuery} />

      <h2>Amplify Todos</h2>
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

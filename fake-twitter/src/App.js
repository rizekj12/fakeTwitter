import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUpPage";
// import Main from "./pages/Main";

import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
// import { Navigate } from "react-router-dom";
// import { Button, Heading } from "@aws-amplify/ui-react";

import "./App.css";
import Sidebar from "./components/Sidebar";

import Feed from "./components/Feed";

import Widgets from "./components/Widgets";

function App({ signOut, user }) {
  /* src/App.js */
  // function App({ signOut, user }) {
  //   // ...
  // }

  return (
    <div className="app">
      {/* <Heading level={1}>Hello {user.username}</Heading>
      <Button onClick={signOut}>Sign out</Button> */}
      <Sidebar />
      <Feed />
      <Widgets />

      {/* <h2>Amplify Todos</h2> */}
      <Routes>
        {/* <Route path={"/"} element={<Main />} /> */}
        <Route path={"/account-home"} element={<HomePage />} />
        <Route path={"/login-page"} element={<LoginPage />} />
        <Route path={"/signup-page"} element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default withAuthenticator(App);

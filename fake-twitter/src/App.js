import HomePage from './pages/HomePage'
import Main from './pages/Main'
import SignUp from './pages/SignUpPage';

import {Routes, Route, Navigate} from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <div>
<Routes>
<Route path={'/'} element={<Main/>}/>
  <Route path={'/account-home'} element={<HomePage/>}/>
  <Route path={'/login-page'} element={<LoginPage/>}/>
  <Route path={'/signup-page'} element={<SignUp/>}/>
</Routes>

    </div>
  );
}

export default App;

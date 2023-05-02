import HomePage from './pages/HomePage'
import Main from './pages/Main'

import {Routes, Route, Navigate} from 'react-router-dom'
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
<Routes>
<Route path={'/'} element={<Main/>}/>
  <Route path={'/account-home'} element={<HomePage/>}/>
  <Route path={'/login-page'} element={<LoginPage/>}/>
</Routes>

    </div>
  );
}

export default App;

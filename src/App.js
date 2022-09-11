import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SharedLayout from './components/SharedLayout';
import Feed from './components/Feed';
import About from './components/About';
import Settings from './components/Settings';
import Error from './components/Error';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';
import UpdateProfile from './components/UpdateProfile';
import { useEffect, useState } from 'react';
// import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import PrivateAuthRoute from './components/PrivateAuthRoute';
function App() {

  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const u = localStorage.getItem("user")
  //   u && JSON.parse(u) ? setUser(true): setUser(false)
  //   console.log(user)
  // })

  // useEffect(() => {
  //   localStorage.setItem("user", user)
  // }, [user])

  return (
    // <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<SharedLayout />}>
          {/* <Route element={<PrivateRoute />}> */}
          <Route index element={<Feed user={user} />} />
          <Route path=':user' element={<Profile />} />
          <Route path='/update-profile' element={<UpdateProfile />} />
          <Route path='/about' element={<About />} />
          <Route path='/settings' element={<Settings />} />
          {/* </Route> */}
          {/* <Route element={<PrivateAuthRoute />}> */}
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login setUser={setUser} />} />
          {/* </Route> */}
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // </AuthProvider>
  );
}

export default App;
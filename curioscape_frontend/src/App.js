import React, {useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Login from './components/Login';
import {GoogleOAuthProvider} from '@react-oauth/google';
import Home from './container/Home';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    //fetching user info from the localstorage
    const User = localStorage.getItem('user') !== 'undefined' 
    ? JSON.parse(localStorage.getItem('user'))
    : localStorage.clear();

    //if user info doesn't exists from the localstorage, then navigate to login
    if(!User) 
      navigate("/login");
  }, [])

  return (
    <GoogleOAuthProvider clientId='913338086499-q1ef425rdmicqv0ssg63i8ni42u884sa.apps.googleusercontent.com'>
      <Routes>
        <Route path="login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </GoogleOAuthProvider>
  )
}

export default App
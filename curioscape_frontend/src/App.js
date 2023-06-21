import React, {useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Login from './components/Login';
import {GoogleOAuthProvider} from '@react-oauth/google';
import Home from './container/Home';

const App = () => {
  const navigate = useNavigate();
  
  return (
    <GoogleOAuthProvider clientId='913338086499-q1ef425rdmicqv0ssg63i8ni42u884sa.apps.googleusercontent.com'>
      <Login/>
    </GoogleOAuthProvider>
  )
}

export default App
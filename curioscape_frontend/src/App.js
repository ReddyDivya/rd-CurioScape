import React, {useEffect} from 'react';
import Login from './components/Login';
import {GoogleOAuthProvider} from '@react-oauth/google';

const App = () => {
  
  return (
    // <GoogleOAuthProvider clientId='913338086499-q1ef425rdmicqv0ssg63i8ni42u884sa.apps.googleusercontent.com'>
      <Login/>
    // </GoogleOAuthProvider>
  )
}

export default App
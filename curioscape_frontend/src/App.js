import React, {useEffect} from 'react';
import Login from './components/Login';
import {GoogleOAuthProvider} from '@react-oauth/google';

const App = () => {

  // function handleCredentialResponse(response) {
  //   console.log("Encoded JWT ID token: " + response);
  // }

  // useEffect(() => {

  //   //global google
  //   google.accounts.id.initialize({
  //     client_id: "913338086499-q1ef425rdmicqv0ssg63i8ni42u884sa.apps.googleusercontent.com",
  //     callback: handleCredentialResponse
  //   });

  //   google.accounts.id.renderButton(
  //     document.getElementById("signInDiv"),
  //     { theme: "outline", size: "large" }  // customization attributes
  //   );
  //   google.accounts.id.prompt(); // also display the One Tap dialog
  // }, [])
  
  return (
    <GoogleOAuthProvider clientId='913338086499-q1ef425rdmicqv0ssg63i8ni42u884sa.apps.googleusercontent.com'>
      <Login/>
    </GoogleOAuthProvider>
  )
}

export default App
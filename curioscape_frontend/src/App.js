import React, {useEffect} from 'react';
import Login from './components/Login';

const App = () => {

  const handleCallbackResponse = (response) => {
    console.log('response >> '+ response.credentials);
  }//handleCallbackResponse

  useEffect(() => {

    //global google
    google.accounts.id.initialize({
      client_id: "913338086499-9apvhk80qbsc0k226hrv0e83c0knb8q3.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton( document.getElementById("signInDiv"),
    {
      theme: "outline",
      size: "large"
    });
  }, [])
  
  return (
    <div>
      <div id="signInDiv">
      
      </div>
      <Login/>
    </div>
  )
}

export default App
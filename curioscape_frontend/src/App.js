import React, {useEffect} from 'react';
import Login from './components/Login';

const App = () => {

  const handleCallbackResponse = () => {
    
  }//handleCallbackResponse

  useEffect(() => {
    return () => {
      //global google
      google.accounts.id.initialize({
        client_id: "913338086499-9apvhk80qbsc0k226hrv0e83c0knb8q3.apps.googleusercontent.com",
        callback:handleCallbackResponse
      })
    }
  }, [])
  
  return (
    <div>
      <Login/>
    </div>
  )
}

export default App
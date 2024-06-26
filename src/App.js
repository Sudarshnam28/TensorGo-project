import React, { useState } from 'react';
import Login from './Login/Login'
import Details from './Details/Details';

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (user) => {
    setUser(user);
  };

  return (
    <div>
      {user ? <Details user={user} /> : <Login onLoginSuccess={handleLoginSuccess}/>}
    </div>
  )
}

export default App;

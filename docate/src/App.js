// src/App.js

import React, { useState } from 'react';
import Login from './Login';

function App() {
  const [userType, setUserType] = useState(null);

  const handleLogin = (type) => {
    setUserType(type);
  };

  return (
    <div className="App">
      {userType ? (
        <div>
          <h1>Welcome, {userType}!</h1>
          {/* Add other components and functionalities here based on userType */}
        </div>
      ) : (
        <div>
          <Login  onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
}

export default App;
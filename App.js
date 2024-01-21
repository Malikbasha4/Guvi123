import React, { useState } from 'react';
import './App.css';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import ProfilePage from './ProfilePage';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Assume a successful login scenario for now
    setLoggedIn(true);
  };

 const initialUserDetails = {
  userName: 'John Doe',
  email: 'john.doe@example.com',
  age: 25,
  gender: 'Male',
  dob: '1997-05-15', // Assuming date of birth in YYYY-MM-DD format
  mobile: '123-456-7890',
  // Add any other details you need
};

  return (
    <Router>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <SignupForm />
        <LoginForm onLogin={handleLogin} />

        {/* Redirect to Profile Page after successful login */}
        {isLoggedIn && <Redirect to="/profile" />}
      </div>

      {/* Add additional routes for other pages */}
      <Route path="/profile">
        {/* Render the ProfilePage component and pass user details */}
        <ProfilePage initialUserDetails={initialUserDetails} />
      </Route>
    </Router>
  );
};

export default App;

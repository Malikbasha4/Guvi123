import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User registered successfully');
      } else {
        console.error('Failed to register user');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="signup">
      <form>
        {/* ...other input fields */}
        <button type="button" onClick={handleSignup}>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;

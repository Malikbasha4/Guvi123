import React, { useState } from 'react';

const ProfilePage = ({ initialUserDetails }) => {
  // Use state to manage user details
  const [userDetails, setUserDetails] = useState(initialUserDetails);

  const handleUpdateDetails = () => {
    // Replace the following logic with actual server request to update user details
    console.log('Simulating user details update:', userDetails);
  };

  return (
    <div className="profile-page">
      <h2>Profile Page</h2>
      <form>
        <label>User Name:</label>
        <input
          type="text"
          value={userDetails.userName}
          onChange={(e) => setUserDetails({ ...userDetails, userName: e.target.value })}
        />

        <label>Email:</label>
        <input
          type="email"
          value={userDetails.email}
          onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
        />

        <label>Age:</label>
        <input
          type="text"
          value={userDetails.age}
          onChange={(e) => setUserDetails({ ...userDetails, age: e.target.value })}
        />

        <label>Gender:</label>
        <input
          type="text"
          value={userDetails.gender}
          onChange={(e) => setUserDetails({ ...userDetails, gender: e.target.value })}
        />

        <label>Date of Birth:</label>
        <input
          type="text"
          value={userDetails.dob}
          onChange={(e) => setUserDetails({ ...userDetails, dob: e.target.value })}
        />

        <label>Mobile:</label>
        <input
          type="text"
          value={userDetails.mobile}
          onChange={(e) => setUserDetails({ ...userDetails, mobile: e.target.value })}
        />

        <button type="button" onClick={handleUpdateDetails}>
          Update Details
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;

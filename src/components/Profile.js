import React from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
  const { userId } = useParams();

  return (
    <div>
      <h1>Profile</h1>
      <p>This is the profile page for user {userId}.</p>
    </div>
  );
}

export default Profile;

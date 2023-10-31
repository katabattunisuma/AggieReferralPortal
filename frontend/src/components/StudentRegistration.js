import React from 'react';
import Input from './Input'; // Import the Input component

function StudentRegistration() {
  return (
    <>
      <Input
        type="text"
        id="name"
        name="name"
        label="Name"
        // Add other props as needed
      />
      <Input
        type="email"
        id="email"
        name="email"
        label="Email"
        // Add other props as needed
      />
      <Input
        type="password"
        id="password"
        name="password"
        label="Password"
        // Add other props as needed
      />
      <Input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm Password"
        // Add other props as needed
      />
    </>
  );
}

export default StudentRegistration;

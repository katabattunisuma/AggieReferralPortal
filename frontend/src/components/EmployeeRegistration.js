import React from 'react';
import Input from './Input'; 

function EmployeeRegistration() {
  return (
    <>
      <Input
        type="text"
        id="name"
        name="name"
        label="Name"
        
      />
      <Input
        type="email"
        id="email"
        name="email"
        label="Email"
        
      />
      <Input
        type="text"
        id="company"
        name="company"
        label="Company"
        
      />
      <Input
        type="text"
        id="jobTitle"
        name="jobTitle"
        label="Job Title"
        
      />
      <Input
        type="password"
        id="password"
        name="password"
        label="Password"
        
      />
    </>
  );
}

export default EmployeeRegistration;

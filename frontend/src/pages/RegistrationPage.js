import React, { useState } from 'react';
import StudentRegistration from '../components/StudentRegistration';
import EmployeeRegistration from '../components/EmployeeRegistration';
import Button from '../components/Button';
import '../styles/RegistrationPage.css'

function RegistrationPage() {
  const [userType, setUserType] = useState('student');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div className="registration-page">
      <h2>Register</h2>
      <form>
        <div className="form-group">
          <label htmlFor="userType">Select User Type:</label>
          <select
            id="userType"
            name="userType"
            value={userType}
            onChange={handleUserTypeChange}
          >
            <option value="student">Student</option>
            <option value="employee">Employee</option>
          </select>
        </div>
        {userType === 'student' ? (
          <StudentRegistration />
        ) : (
          <EmployeeRegistration />
        )}
        <Button type= "submit" label="Register"/>
      </form>
    </div>
  );
}

export default RegistrationPage;

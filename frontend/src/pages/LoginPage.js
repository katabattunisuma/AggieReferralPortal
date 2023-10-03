import React, { useState } from 'react';
import '../styles/LoginPage.css'
import Button from '../components/Button';

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can send the login request to your backend here
    console.log('Login data submitted:', formData);
    // Reset the form fields after submission (or handle success/failure)
    setFormData({ username: '', password: '' });
  };

  return (
    <div className="login-page">
      <h2>Aggie Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Email:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <Button type="submit" label="Login"/>
      </form>
    </div>
  );
}

export default LoginPage;

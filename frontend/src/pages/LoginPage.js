import React, { useState } from 'react';
import Input from '../components/Input'; 
import '../styles/LoginPage.css'; 
import Button from '../components/Button';

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //login request to your backend here
    console.log('Login data submitted:', formData);
    // Reset the form fields after submission (or handle success/failure)
    setFormData({ username: '', password: '' });
  };

  return (
    <div className="login-page">
      <h2>Welcome Back</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          label="Email"
        
        />
        <Input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          label="Password"
          
        />
        <Button type="submit" label="Login"/>
      </form>
    </div>
  );
}

export default LoginPage;

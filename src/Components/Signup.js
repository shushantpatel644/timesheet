// src/components/Signup.js
import axios from 'axios';
import React, { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const response = await axios.post('http://localhost:3000/signup',{username,password});
        console.log(response.data);
        // VM3733:2 URL: http://localhost:3000/
        }catch(error){
            console.error('Signup error:', error);
        }
    }
    const url = 'http://localhost:3000/';
    console.log('URL:', url);
    // Add signup logic here

  return (
    <div>
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" data value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
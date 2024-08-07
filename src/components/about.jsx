import "../css/task1.css"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const About  =()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Add your authentication logic here
  
      // For now, just redirect to the homepage after login
      
    };
    return (
        <form onSubmit={handleSubmit} className="login-form">
      <div>
        <label>Email :</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>


        
        /*
        <div className="div-tag">
            <h1>You're successfully Login.!</h1>
        </div>
        */
    );
}
export default About;
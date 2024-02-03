
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 
const Login = () => {
  const navigate = useNavigate();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

  const handleLogin = () => {
     if (email.trim() === "" || password.trim() === "") {
       alert("Email and password are required.");
       return;
     }
    
    navigate("/redirected-page");
  };

  return (
    <div>
      
      <div className="login-container">
        <div className="form-container">
          <h2>Login</h2>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <div className="button-container">
            <a>
              New user? <a href="#">Create an account</a>
            </a>
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

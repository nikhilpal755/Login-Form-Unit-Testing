import React, { useState } from "react";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleSubmit = () => {
    if (username === "Nikhil" && password === "123") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };
  return (
    <>
      <h2>{isLoggedIn ? "Logged In" : "LogIn"}</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button name="submit" onClick={handleSubmit}>
        Login
      </button>
    </>
  );
};

export default Login;

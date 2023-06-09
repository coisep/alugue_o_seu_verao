import { useState } from "react";

const of = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch(`/api/utilizadores?username=${username}&password=${password}`);
  
    if (response.ok) {
      const users = await response.json();
      console.log("Logged in successfully");
      console.log(users);
  
      const user = users.find((user) => user.username === username);
      if (user) {
        console.log("User found:", user);
        if (user.level === "1" || user.level === "2") {
          window.location.href = `../backoffice?id=${user.id}`;
        } else {
          window.location.href = `../home?id=${user.id}`;
        }
      } else {
        console.log("User not found");
      }
    } else {
      const error = await response.json();
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default of;

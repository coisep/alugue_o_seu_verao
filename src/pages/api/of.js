import { useState } from "react";

const of = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch(
      `/api/utilizadores?username=${username}&password=${password}`
    );

    if (response.ok) {
      const users = await response.json();
      console.log("Logged in successfully");
      console.log(users);

      const user = users.find((user) => user.username === username);
      if (user) {
        console.log("User found:", user);
        if (user.level === "1" || user.level === "2") {
          

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
    <div className="bg-white p-8 rounded shadow">
    <h2 className="text-2xl font-bold mb-4">Login</h2>
    <input
      type="text"
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      className="border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring focus:border-blue-500"
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring focus:border-blue-500"
    />
    <button
      onClick={handleLogin}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
    >
      Login
    </button>
  </div>
  
  );
};

export default of;

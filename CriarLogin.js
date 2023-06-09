import { useState } from "react";

const CriarLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleCriarLogin = async () => {
    const response = await fetch("/api/utilizadores", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Utilizador criado:", data.insertedUtilizador);
    } else {
      const error = await response.json();
      console.error("Erro ao criar utilizador:", error);
    }
  };

  return (
    <div className="bg-red-500 p-8 rounded shadow">
    <h2 className="text-2xl font-bold mb-4">Criar Login</h2>
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
      onClick={handleCriarLogin}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
    >
      Criar Login
    </button>
  </div>
  
  );
};

export default CriarLogin;

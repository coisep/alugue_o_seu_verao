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
    <div classname="bg-red-500">
      <h2>Criar Login</h2>
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
      <button onClick={handleCriarLogin}>Criar Login</button>
    </div>
  );
};

export default CriarLogin;

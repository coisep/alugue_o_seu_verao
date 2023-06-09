import { useState, useEffect } from 'react';
import Layout from './General/components/Layout';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [criarUser, setCriarUser] = useState("");
  const [criarPassword, setCriarPassword] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch("/api/utilizadores");
    if (res.status === 200) {
      const data = await res.json();
      setUsers(data);
    }
  };

  const login = () => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      console.log("Logged in successfully");
      if (user.level === 1) {
        history.push('../pages/backoffice.js'); 
      } else if (user.level === 3) {
        history.push('./pages/home.js'); 
      }
    } else {
      console.log("Invalid username or password");
    }
  };
  const registocliente = async () => {
    let res = await fetch("/api/utilizadores", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: criarUser, password: criarPassword })
    });

    if (res.status === 200) {
      res = await res.json();
      console.log("criado");
    }
    else {
      console.log("nao criado")
    }
   
  };

  return (
    <Layout>
      <div className='flex items-center justify-center' style={{ marginTop: "200px", justifyContent: "center", alignItems: "center", marginBottom: "100px" }}>
        <div style={{ display: "flex", flexDirection: "column", marginRight: "300px", alignItems: "center" }}>
          <p>Login</p>
          <form style={{ borderRadius: "15px", borderWidth: "3px", padding: "15px", borderColor: "black", }}>
            <div style={{ flexDirection: "row", marginTop: "20px" }}>
              <div>Username</div>
              <input style={{ borderRadius: "5px", background: "#f7f7f7" }} type="text" onChange={(e) => setUsername(e.target.value)} value={username} required />
            </div>
            <div style={{ marginTop: "8px" }}>
              <div>Password</div>
              <input style={{ borderRadius: "5px", background: "#f7f7f7" }} type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
            </div>
            <button onClick={login} style={{ borderRadius: "5px", backgroundColor: "lightgreen", marginTop: "30px" }} type='submit'>Login</button>
          </form>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
          <p>Criar Conta</p>
          <form style={{ borderRadius: "15px", borderWidth: "3px", padding: "15px", borderColor: "black" }}>
            <div style={{ flexDirection: "row", marginTop: "20px" }}>
              <div>Username</div>
              <input style={{ borderRadius: "5px", background: "#f7f7f7" }} type="text" onChange={(e) => setCriarUser(e.target.value)} value={criarUser} required />
            </div>
            <div style={{ marginTop: "8px", }}>
              <div>Password</div>
              <input style={{ borderRadius: "5px", background: "#f7f7f7" }} type="password" onChange={(e) => setCriarPassword(e.target.value)} value={criarPassword} required />
            </div>
            <button onClick={registocliente} style={{ borderRadius: "5px", backgroundColor: "lightgreen", marginTop: "30px" }} type='submit'>Criar Login</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;

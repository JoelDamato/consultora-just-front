'use client'
import React, { useState, FormEvent, ChangeEvent } from "react";
import axios from 'axios'; 

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post<{ token: string }>("http://localhost:8000/api/users/login", { email, password });
      // Si la autenticación es exitosa, podrías redirigir al usuario a otra página
      // Por ejemplo, utilizando el router de React.
      localStorage.setItem("token", response.data.token);
      alert("Usuario autenticado:" + response.data);
      window.location.href = "/adminpanel";
      
    } catch (error) {
      setError("Error al iniciar sesión. Verifica tu constraseña.");
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit">Iniciar Sesión</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default LoginForm;

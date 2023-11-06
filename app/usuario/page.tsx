'use client'
import React, { useState, FormEvent, ChangeEvent } from "react";
import axios from 'axios';
import Image from "next/image";

const LoginForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const openModal = () => {
    setIsModalOpen(true);
    // Cerrar el modal automáticamente después de 3 segundos
    setTimeout(() => {
      closeModal();
      // Redirigir al usuario a la página de inicio utilizando window.location
      window.location.href = '/';
    }, 3000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post<{ token: string }>("https://apibienestar.onrender.com/api/users/login", { email, password });
      // Si la autenticación es exitosa, podrías redirigir al usuario a otra página
      // Por ejemplo, utilizando el router de React.
      localStorage.setItem("token", response.data.token);
      openModal();

      // Espera 3 segundos y luego redirige al usuario
      setTimeout(() => {
        closeModal();
        window.location.href = "/adminpanel";
      }, 3000);
    } catch (error) {
      setError("Error al iniciar sesión. Verifica tu constraseña.");
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-5 mt-5">
    <form className="flex flex-col items-center w-[50%] gap-5" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center">
        <label>Email:</label>
        <input type="email" value={email} placeholder="email@emal.com" onChange={handleEmailChange} />
      </div>
      <div className="flex flex-col items-center">
        <label>Password:</label>
        <input type="password" value={password} placeholder="******" onChange={handlePasswordChange} />
      </div>
      <button className="flex justify-center border-[2px] border-black rounded-lg p-2" type="submit">Iniciar Sesión</button>
      {error && <p>{error}</p>}
    </form>

       
    {isModalOpen? 
  <div className="absolute mt-[40vh] z-50 w-[60%] h-[8%] bg-white rounded-lg shadow-lg" onClick={closeModal}>
    <div className='flex flex-row w-[100%] gap-2 justify-center'>
    <h2 className="text-xl font-bold text-center text-black"> Sesion Iniciada  </h2>
    <Image src="https://i.ibb.co/rpW0rx0/vecteezy-tick-check-mark-icon-sign-symbol-design-10145966-81.png" width={30} height={30} />
    
    </div>
  </div>: ""}


    </div>
  );
};

export default LoginForm;

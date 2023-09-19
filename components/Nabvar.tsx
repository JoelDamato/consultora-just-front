

'use client'

import { useState,useEffect } from 'react'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'





export default function Nabvar() {
  
  const [menu, setMenu] = useState<boolean>(false);

  function handleMenu() {
    setMenu(!menu);
  }
  const [token, setToken] = useState<string | null>(null);

  const handleLogout = () => {
    // Elimina el token del localStorage al cerrar sesión
    localStorage.removeItem("token");
    // Actualiza la variable "token" a null para reflejar el cierre de sesión
    setToken(null);
    // Redirige al usuario a la página de inicio de sesión o a cualquier otra página pública
    window.location.href = "/"; // Reemplaza "/login" con la ruta de tu página de inicio de sesión
  };

  // useEffect para obtener el token del localStorage cuando el componente se monte
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  return (
      <nav className='z-50 p-3 flex gap-2 fixed w-[100vw] justify-star items-center h-[13vh] bg-white sm:bg-gradient-to-r sm:from-white sm:to-[#713f12]/80 text-[#713f12] border-b-1 shadow-lg '>


       <img src="https://i.ibb.co/ryFWBLr/logobren-removebg-preview.png" className='h-[15vh]  sm:h-[13vh]' alt="Logo" />
       
     



       <div className='hidden sm:flex w-[80vw] justify-evenly'>
       <Link className='hover:text-white hover:font-semibold font-bold  ' href="/">Inicio</Link>
       <Link className='hover:text-white hover:font-semibold font-bold  ' href="/aromaterapia">Aromaterapia</Link>
       <Link className='hover:text-white hover:font-semibold font-bold  ' href="/productos">Productos</Link>
       {token? <Link className='hover:text-white hover:font-semibold font-bold  ' href="/adminpanel">Administracion</Link> : ""}
       {token? <button className='hover:text-white hover:font-semibold font-bold  ' onClick={handleLogout}>Cerrar Sesión</button> : 
       <Link className='hover:text-white hover:font-semibold font-bold  ' href="/usuario">Iniciar Sesion</Link>}
       </div>

       <div className='sm:hidden w-[80vw] flex justify-end'>
       <svg onClick={handleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" sm:hidden w-8 h-8">
       <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
       </svg>
       </div>
       {menu? 
       <div className='absolute top-[70%] left-[50%] shadow-lg bg-white/60 flex flex-col  w-[60vw] min-h-[20vh] rounded-lg p-5 gap-5'>

       <Link className='hover:text-black hover:font-semibold font-bold flex gap-3' href="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
</svg>
Inicio</Link>
       <Link className='hover:text-black hover:font-semibold font-bold flex gap-3' href="/aromaterapia"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>
Aromaterapia</Link>
       <Link className='hover:text-black hover:font-semibold font-bold flex gap-3' href="/productos"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
</svg>
Productos</Link>
{token? <Link className='hover:text-black hover:font-semibold font-bold flex gap-3' href="/adminpanel"> 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
</svg>
Admin</Link> :""}
{token? 
<div className='flex flex-row gap-3'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<button className='hover:text-white hover:font-semibold font-bold  ' onClick={handleLogout}>
 
  Cerrar Sesión</button> 
  </div>
: <Link className='hover:text-black hover:font-semibold font-bold flex gap-3' href="/usuario"> 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
Iniciar Sesion</Link> }







       </div>
       
       :""}
       


      </nav>
    
  )
}
import React from 'react'
import Link from 'next/link'

export default function Nabvar() {
  return (
      <nav className='flex fixed w-[100vw] justify-evenly items-center h-[10vh] bg-gradient-to-r from-white to-[#713f12]/80 text-black border-b-1 shadow-lg '>


       <img src="www.fas.jpg" alt="Logo" />
       <Link href="/">Inicio</Link>
       <Link href="/productos">Productos Just</Link>
       <Link href="/velas">Velas</Link>
      
      </nav>
    
  )
}

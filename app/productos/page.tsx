'use client'
import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'

interface Producto {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
}

export default function Productos() {

  const [productos, setProductos] = useState<Producto[] | null>(null);

  useEffect(() => {
    axios.get('https://apibienestar.onrender.com/api/products/')
      .then(res => setProductos(res.data)) // Cambiar aquí
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    // Verifica si productos no es nulo antes de mostrarlo en la consola
    if (productos !== null) {
      console.log(productos); // Se ejecutará cada vez que productos cambie y no sea nulo
    }
  }, [productos]);





  return (
       <div>
      {productos === null ? (
        <div>Cargando...</div>
      ) : (
        <div className='flex flex-wrap w-[100%] h-[10%] gap-3'>
        

          {productos?.map((producto,index) => (

            <div key={index} className='shadow-lg rounded-[10vw] bg-white/80 w-[100%] lg:w-[20vw] h-[50vh]  flex flex-col justify-center items-center py-5'>
            
              <h1 className='p-2 text-2xl'>{producto?.name}</h1>
              <Image  className="w-[100%] h-[40%] object-none" src={producto?.image} alt={producto?.name} width={150} height={150} />
              
              <p className='p-2 '>{producto?.category}</p>
    
<Link  className='shadow-lg rounded-lg p-1 hover:bg-black/20' href={`/productos/${producto?.id}`}>
  Ver más...
</Link>


            </div>


          ))}
       
        </div>
      )}
    </div>
  )
}

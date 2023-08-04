'use client'
import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import Link from 'next/link';

interface Producto {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
}

export default function productos() {

  const [productos, setProductos] = useState<Producto[] | null>(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/')
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
        <div className='flex  sm:flex-wrap w-[100%] gap-3'>
        

          {productos?.map((producto) => (

            <div className='border-[1px] border-black bg-white sm:w-[30%]  flex flex-col items-center'>
            
              <h1 className='p-2 text-3xl'>{producto?.name}</h1>
              <p className='p-2 '>{producto?.description}</p>
              <p className='p-2 '>{producto?.category}</p>
              <img  className="w-[100%] h-[40%]" src={producto?.image} alt={producto?.name} />
              <Link href={`/productos/${producto?.id}`}>Ver mas..</Link>
            
            </div>

          ))}
       
        </div>
      )}
    </div>
  )
}

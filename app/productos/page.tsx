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
        <ul>
          {productos?.map((producto) => (
            <li key={producto?.id}>
              <h3>{producto?.name}</h3>
              <p>{producto?.description}</p>
              <p>{producto?.category}</p>
              <img src={producto?.image} alt={producto?.name} />
              <Link href={`/productos/${producto?.id}`}>Ver mas..</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

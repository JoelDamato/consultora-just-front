'use client'
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'

interface Producto {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
}

interface PageProps {
  params: {
    id: number;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const [producto, setProducto] = useState<Producto | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${params.id}`)
      .then((res) => setProducto(res.data))
      .catch((err) => console.log(err));
  }, [params.id]);

  useEffect(() => {
    if (producto !== null) {
      console.log(producto);
    }
  }, [producto]);

  return (
    <div className='flex flex-col items-center'>
      {producto ? (
        <>
        
          <h3 className='text-3xl m-2'>{producto.name}</h3>
          <p> Categoria: {producto.category}</p>
          <Image className='rounded-full m-2' src={producto.image} alt={producto.name} />
          <p className='m-2'>{producto.description}</p>
          
          
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;

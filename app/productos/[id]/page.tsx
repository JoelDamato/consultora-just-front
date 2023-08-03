'use client'
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';

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
    <div>
      <h1>Esto es un producto {params.id}</h1>
      {producto ? (
        <>
          <h3>{producto.name}</h3>
          <p>{producto.description}</p>
          <p>{producto.category}</p>
          <img src={producto.image} alt={producto.name} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;

'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Producto {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
}

const AdminPanel = () => {
  const [productos, setProductos] = useState<Producto[] | null>(null);
  const [admin, setAdmin] = useState("crear")
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    image: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios.post('https://apibienestar.onrender.com/api/products/new', formData)
      .then((res) => {
        alert('Producto creado: ' + res.data);
        // Aquí puedes realizar acciones adicionales después de crear el producto
      })
      .catch((err) => {
        console.error('Error al crear el producto:', err);
        // Aquí puedes manejar el error si es necesario
      });
  };

  useEffect(() => {
    axios.get('https://apibienestar.onrender.com/api/products/')
      .then(res => setProductos(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id: number) => {
    axios.delete(`https://apibienestar.onrender.com/api/products/delete/${id}`)
      .then(() => {
        // Si la eliminación fue exitosa, actualizamos la lista de productos
        alert("producto eliminado")
        setProductos(prevProductos => prevProductos !== null ? prevProductos.filter(producto => producto.id !== id) : null);
      })
      .catch(err => console.log(err));
  };


 function admins (params:string) {
    setAdmin(params)
 }

  return (
    <div className='flex flex-col items-center gap-5 ' >
         <div className='flex justify-evenly bg-black/20 rounded-lg  w-[50vw] p-5'>
        <button className='rounded-lg bg-white/70 p-4 hover:bg-amber-700/20' onClick={()=>admins("crear")}> CREAR </button>
        <button className='rounded-lg bg-white/70 p-4 hover:bg-amber-700/20' onClick={()=>admins("editar")}> EDITAR </button>
        <button className='rounded-lg bg-white/70 p-4 hover:bg-amber-700/20' onClick={()=>admins("borrar")}> ELIMINAR </button>
        </div>
        {admin === "crear"? 
        <>
        <h1 className='m-5 text-3xl'>Crear Nuevo Producto</h1>
      <form className="flex flex-col items-center w-[60vw] gap-5" onSubmit={handleSubmit}>
        <input
        className=' w-[100%]'
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nombre"
        />
        <input
        className='min-h-[20vh] w-[100%]'
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Descripción"
        />
        <input
        className=' w-[100%]'
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Categoría"
        />
        <input
        className=' w-[100%]'
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Imagen URL"
        />
        <button className='bg-yellow-600 rounded-lg mt-5 p-5' type="submit">Crear Producto</button>
      </form>
      </>
:""}
{admin === "borrar"? 
      <div>
        <h1 className='text-3xl'>Eliminar Productos</h1>

        <ul>
          {productos !== null && productos.map((producto) => (
            <li key={producto.id}>
              <span>{producto.name}</span>
              <button className='ml-5 bg-red-600 rounded-lg mt-5 p-1' onClick={() => handleDelete(producto.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
      :""}

    </div>
  );
};

export default AdminPanel;

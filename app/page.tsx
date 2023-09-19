'use client'
import Image from 'next/image'
import React,{useState} from 'react'


export default function Home() {

  let [counter, setCounter] = useState(0)
  
  const imagesCarousel = 
[
  {image:"https://i.ibb.co/VQ5GhQ3/oleo-31-2.jpg"},
  {image:"https://cdn.pixabay.com/photo/2020/06/06/08/21/switzerland-5265672_1280.jpg"},
  {image:"https://www.anred.org/wp-content/uploads/2021/02/01041916494.jpg"},
]
  
  let sumar = () => {
    setCounter(counter + 1);
    if (counter === imagesCarousel.length - 1) {
      setCounter(0)
    }
  }
  let restar = () => {
    setCounter(counter - 1);
    if (counter === 0) {
      setCounter(imagesCarousel.length - 1)
    }
  }




  return (
    <>
    <div className='absolute flex gap-[60vw] sm:gap-[75vw] top-[60vh]'>
    <svg onClick={restar} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="bg-white/20  hover:bg-white rounded-full w-10 h-10 sm:w-16 sm:h-16">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
</svg>

    <svg onClick={sumar} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="bg-white/20 hover:bg-white rounded-full w-10 h-10 sm:w-16 sm:h-16">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>

    </div>
    <Image src={imagesCarousel[counter]?.image} className=' h-[80vh] w-[100%] object-none shadow-lg' alt="Oleo31" />
    <h1 className='text-3xl font-semibold tracking-[10px] mt-5 mb-5 p-5'>
      

      ¡Bienvenido a Bienestar Elemental!</h1>
    
    <div className='sm:flex justify-evenly gap-5 mb-5'>
<Image className='shadow-2xl h-[30vh] w-[80vw] sm:w-[20vw] object-cover rounded-full' src="https://i.pinimg.com/564x/ea/e2/72/eae272e89e0d99ad3011a8c0686e9ecf.jpg" alt="" />
<p className='p-2 sm:w-[60vw] text-2xl flex justify-center'>

Te ofrecemos una cuidadosa selección de productos naturales que te ayudarán a armonizar cuerpo y mente, y a llenar tu hogar con una energía positiva.

En cada vela y sahumerio, encontrarás la esencia misma de la naturaleza, porque te ofrecemos productos JUST, una marca comprometida con ingredientes 100% naturales y sostenibles. Cada producto está impregnado con el amor y la bondad que solo la madre naturaleza puede brindar.

</p>
</div>

<div className='sm:flex justify-evenly gap-5 mb-5'>

<Image className=' sm:hidden flex h-[30vh] w-[80vw] shadow-2xl sm:w-[20vw] object-cover rounded-full' src="https://i.pinimg.com/564x/cb/8d/76/cb8d769a344191a9be4e2f39b274c0e0.jpg" alt="" />

<p className='p-2 sm:w-[60vw] text-2xl flex justify-center'>



Nuestro objetivo es brindarte una experiencia única de relajación y bienestar. Ya sea que desees crear un ambiente sereno en tu hogar, meditar para encontrar tu paz interior, o simplemente consentirte con productos que te llenen de energía positiva, estamos aquí para ti.

Explora nuestra variedad de velas, creadas para iluminar tu camino en los momentos más especiales. Déjate envolver por los aromas naturales que desprenden nuestros sahumerios, elevando tus sentidos a una conexión más profunda con la naturaleza.
</p>

<Image className='shadow-2xl hidden sm:flex h-[30vh] w-[80vw] sm:w-[20vw] object-cover rounded-full' src="https://i.pinimg.com/564x/cb/8d/76/cb8d769a344191a9be4e2f39b274c0e0.jpg" alt="" />





    </div>
 
 <div className='bg-gray-200 flex flex-col items-center rounded-lg'>
<iframe

        src="https://www.veed.io/embed/00ba9eb1-cbbe-4d4e-b4d1-3f90d2c1f1ef"
        className='w-[80vw] h-[60vh] sm:w-[40vw] sm:h-[60vh]'
        title="Video de Humificador"
        allowFullScreen
      ></iframe>
   <p className='p-2 sm:w-[60vw] text-2xl flex justify-center'>
      
      En este viaje hacia el equilibrio, te acompañaremos con consejos útiles y sugerencias para maximizar tu bienestar en cada paso.
    
    Así que, sumérgete en el aroma de la naturaleza y encuentra la calma que tanto anhelas. Te invitamos a descubrir la magia de nuestros productos naturales, y a vivir una experiencia única en nuestro rincón de serenidad y armonía.
    
    </p>
    </div>
    </>
  )
}

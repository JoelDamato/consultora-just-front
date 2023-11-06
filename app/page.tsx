'use client'

import React,{useState} from 'react'
import Image from 'next/image'


export default function Home() {

  return (
    <>



<h1 className='text-center text-2xl font-semibold tracking-[10px] mt-5 mb-5 p-5'>
      <div className='flex justify-center items-center p-5'>
<Image className='objet-fit rounded-lg' src="https://i.ibb.co/JBj670q/1-1.jpg" alt="Logo" width={800} height={600} />
</div>
      ¡Bienvenido a Bienestar Elemental!</h1>
    
    <div className='flex-col items-center sm:flex justify-evenly gap-5 mb-5'>
<p className='p-5 sm:w-[60vw] text-center text-1xl flex justify-center'>

Te ofrecemos una cuidadosa selección de productos naturales que te ayudarán a armonizar cuerpo y mente, y a llenar tu hogar con una energía positiva.

En cada vela y sahumerio, encontrarás la esencia misma de la naturaleza, porque te ofrecemos productos JUST, una marca comprometida con ingredientes 100% naturales y sostenibles. Cada producto está impregnado con el amor y la bondad que solo la madre naturaleza puede brindar.
</p>

<div className='flex justify-center items-center p-5'>
<Image className='objet-fit rounded-lg' src="https://i.ibb.co/RBLzxMP/base-so-las-formulas-para-el-agua-caliente-esp.webp
" alt="Logo" width={800} height={600} />
</div>
<p className='p-5 sm:w-[60vw] text-center text-1xl flex justify-center'>


Nuestro objetivo es brindarte una experiencia única de relajación y bienestar. Ya sea que desees crear un ambiente sereno en tu hogar, meditar para encontrar tu paz interior, o simplemente consentirte con productos que te llenen de energía positiva, estamos aquí para ti.

Explora nuestra variedad de velas, creadas para iluminar tu camino en los momentos más especiales. Déjate envolver por los aromas naturales que desprenden nuestros sahumerios, elevando tus sentidos a una conexión más profunda con la naturaleza.
</p>



    </div>
 
 <div className='pb-5 bg-gray-200 flex flex-col items-center rounded-lg'>
<iframe

        src="https://www.veed.io/embed/00ba9eb1-cbbe-4d4e-b4d1-3f90d2c1f1ef"
        className='w-[80vw] h-[60vh] sm:w-[40vw] sm:h-[60vh] rounded-lg'
        title="Video de Humificador"
        allowFullScreen
      ></iframe>

   <p className='pt-2 mt-5 sm:w-[60vw] text-1xl text-center flex justify-center'>
      
      En este viaje hacia el equilibrio, te acompañaremos con consejos útiles y sugerencias para maximizar tu bienestar en cada paso.
    
    Así que, sumérgete en el aroma de la naturaleza y encuentra la calma que tanto anhelas. Te invitamos a descubrir la magia de nuestros productos naturales, y a vivir una experiencia única en nuestro rincón de serenidad y armonía.
    
    </p>
    </div>
    </>
  )
}

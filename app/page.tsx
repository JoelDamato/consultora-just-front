'use client'

import React,{useState} from 'react'
import Image from 'next/image'


export default function Home() {

  return (
    <>




      <div className='flex justify-center items-center '>
<Image className='objet-fit rounded-lg mt-2' src="https://i.ibb.co/JBj670q/1-1.jpg" alt="Logo" width={800} height={600} />
</div>
    <div className='flex-col items-center gap-5 mb-5'>
<p className='p-5 text-center text-1xl flex justify-center items-center'>

Te ofrecemos una cuidadosa selección de productos naturales que te ayudarán a armonizar cuerpo y mente, y a llenar tu hogar con una energía positiva.

En cada vela y sahumerio, encontrarás la esencia misma de la naturaleza, porque te ofrecemos productos JUST, una marca comprometida con ingredientes 100% naturales y sostenibles. Cada producto está impregnado con el amor y la bondad que solo la madre naturaleza puede brindar.
</p>

<div className='flex justify-center items-center p-5'>
<Image className='objet-fit rounded-lg' src="https://i.ibb.co/b2ySztJ/base-so-las-formulas-para-el-agua-caliente-esp.jpg
" alt="Logo" width={800} height={600} />
</div>
<p className='p-5 text-center text-1xl flex justify-center items-center'>


Nuestro objetivo es brindarte una experiencia única de relajación y bienestar. Ya sea que desees crear un ambiente sereno en tu hogar, meditar para encontrar tu paz interior, o simplemente consentirte con productos que te llenen de energía positiva, estamos aquí para ti.

Explora nuestra variedad de velas, creadas para iluminar tu camino en los momentos más especiales. Déjate envolver por los aromas naturales que desprenden nuestros sahumerios, elevando tus sentidos a una conexión más profunda con la naturaleza.
</p>



    </div>
 
    </>
  )
}

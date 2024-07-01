'use client'

import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='flex flex-col justify-center items-center p-5 md:flex-row'>
        <Image
          className='object-cover rounded-full mt-2 p-2 w-3/4 md:w-1/2'
          src="https://i.ibb.co/JBj670q/1-1.jpg"
          alt="Logo"
          width={1000}
          height={100}
        />
        <div className='p-5 text-center text-lg md:text-2xl flex justify-center items-center md:w-1/2'>
          <p>
            Soy <span className='font-bold'>Brenda</span>, consultora de JUST y estilista.

            Te ofrezco productos naturales para armonizar cuerpo y mente, llenando tu hogar de energía positiva. JUST se compromete con ingredientes 100% naturales y sostenibles, aportando amor y bondad de la naturaleza en cada producto.

            Como estilista, mi objetivo es realzar tu belleza natural con técnicas y productos personalizados. Contáctame para más información o para probar nuestros productos. ¡Estoy aquí para ayudarte a sentirte y verte increíblemente bien!
          </p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center p-5 md:flex-row'>
        <div className='p-5 text-center text-lg md:text-2xl flex justify-center items-center md:w-1/2'>
          <p>
            Te ofrecemos una cuidadosa selección de productos naturales que te ayudarán a armonizar cuerpo y mente, y a llenar tu hogar con una energía positiva. En cada vela y sahumerio, encontrarás la esencia misma de la naturaleza, porque te ofrecemos productos JUST, una marca comprometida con ingredientes 100% naturales y sostenibles. Cada producto está impregnado con el amor y la bondad que solo la madre naturaleza puede brindar.
          </p>
        </div>
        <Image
          className='object-cover rounded-full mt-2 p-2 w-3/4 md:w-1/2'
          src="https://i.ibb.co/y0FpYtJ/Costa-Rica-Naturaleza-770x514.png"
          alt="Logo"
          width={1000}
          height={100}
        />
      </div>
    </>
  )
}

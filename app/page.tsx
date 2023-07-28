
import Image from 'next/image'
import React from 'react'


export default function Home() {

  return (
    <>
    <img src="https://i.ibb.co/VQ5GhQ3/oleo-31-2.jpg" className=' h-[80vh] w-[100%] object-none shadow-lg' alt="Oleo31" />
    <h1 className='text-3xl font-semibold tracking-[10px] mt-5 mb-5 p-5'>
      

      ¡Bienvenido a bienestar de elementos!</h1>
    
    <div className='sm:flex justify-evenly gap-5 mb-5'>
<img className='h-[30vh] w-[80vw] sm:w-[20vw] object-cover rounded-full' src="https://i.pinimg.com/564x/ea/e2/72/eae272e89e0d99ad3011a8c0686e9ecf.jpg" alt="" />

<p className='p-2 sm:w-[60vw] text-2xl flex justify-center'>

Te ofrecemos una cuidadosa selección de productos naturales que te ayudarán a armonizar cuerpo y mente, y a llenar tu hogar con una energía positiva.

En cada vela y sahumerio, encontrarás la esencia misma de la naturaleza, porque te ofrecemos productos JUST, una marca comprometida con ingredientes 100% naturales y sostenibles. Cada producto está impregnado con el amor y la bondad que solo la madre naturaleza puede brindar.

</p>
</div>

<div className='sm:flex justify-evenly gap-5 mb-5'>

<img className='sm:hidden flex h-[30vh] w-[80vw] sm:w-[20vw] object-cover rounded-full' src="https://i.pinimg.com/564x/cb/8d/76/cb8d769a344191a9be4e2f39b274c0e0.jpg" alt="" />

<p className='p-2 sm:w-[60vw] text-2xl flex justify-center'>



Nuestro objetivo es brindarte una experiencia única de relajación y bienestar. Ya sea que desees crear un ambiente sereno en tu hogar, meditar para encontrar tu paz interior, o simplemente consentirte con productos que te llenen de energía positiva, estamos aquí para ti.

Explora nuestra variedad de velas, creadas para iluminar tu camino en los momentos más especiales. Déjate envolver por los aromas naturales que desprenden nuestros sahumerios, elevando tus sentidos a una conexión más profunda con la naturaleza.
</p>

<img className='hidden sm:flex h-[30vh] w-[80vw] sm:w-[20vw] object-cover rounded-full' src="https://i.pinimg.com/564x/cb/8d/76/cb8d769a344191a9be4e2f39b274c0e0.jpg" alt="" />





    </div>
    <p>En este viaje hacia el equilibrio, te acompañaremos con consejos útiles y sugerencias para maximizar tu bienestar en cada paso.

Así que, sumérgete en el aroma de la naturaleza y encuentra la calma que tanto anhelas. Te invitamos a descubrir la magia de nuestros productos naturales, y a vivir una experiencia única en nuestro rincón de serenidad y armonía.

</p>
<video controls>
        <source src="https://drive.google.com/file/d/1QuqAiNmISa41E5FaPnWxzofoOTJdydJh/view" type="video/mp4" />
        Tu navegador no admite el elemento de video.
      </video>
    ¡Bienvenidas al mágico mundo del bienestar de elementos!



    
    
    
    </>
  )
}

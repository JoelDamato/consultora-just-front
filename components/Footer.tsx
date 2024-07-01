import React from 'react'
import Image from 'next/image'





export default function Footer() {
  return (
    <div className='mt-5 w-[100vw] min-h-[30vh] '>
      
      <div className='p-2 flex flex-col items-center justify-center shadow-lg bg-white/20 border-[1px] w-[100vw]'>
        <p className='text-bold text-2xl '>Contactame por Whatsapp</p>
      <a href="https://wa.me/+5491159554468" target="_blank">
      <Image src="https://i.ibb.co/M1scBcF/627baa008d659819b11084f7.png"  alt="Logo" width={100} height={100} /></a>
</div>


    </div>
  )
}

import React from 'react'
import Image from 'next/image'





export default function Footer() {
  return (
    <div className='mt-5 w-[100vw] min-h-[30vh] '>
      
      <div className='p-3 flex justify-center gap-3 shadow-lg bg-white/20 border-[1px] w-[100vw]'>

<a target="_blank" href="https://www.instagram.com/brendacarolaalbornoz/">
<img className='w-[8vw] h-[5vh] sm:w-[3vw] object-fill'  src="https://cdn.icon-icons.com/icons2/2972/PNG/512/instagram_logo_icon_186894.png" alt="" />
</a>
<a target="_blank" href="https://wa.me/+5491167501767">
<img className='w-[8vw] h-[5vh] sm:w-[3vw] object-fill'  src="https://cdn.icon-icons.com/icons2/2972/PNG/512/whatsapp_logo_icon_186881.png" alt="" />
</a>
</div>


    </div>
  )
}

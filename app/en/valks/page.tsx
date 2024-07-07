import Image from 'next/image'
import React from 'react'

const Valks = () => {
  return (
    <div className='flex justify-center items-center h-screen w-full '>
        <div className='bg-secondary rounded-md p-5 select-none pointer-events-none'>
        <Image src="/icon/working-on.svg" alt="valks" width={100} height={100} />
        </div>
    </div>
  )
}

export default Valks
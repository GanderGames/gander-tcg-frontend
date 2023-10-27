import Image from 'next/image'
import React from 'react'

interface props{
    img: string
}

export default function ImageBlock (prop:props) {
  return (
    <div>
        <Image className='rounded-3xl'  src={prop.img} alt="epic" width={500} height={100}/>
    </div>
  )
}

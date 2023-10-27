import React from 'react'

interface props{
    text:string;
    onPress:Function;
    input:any
}

export default function SubmitButton(prop:props) {
  return (
    <button className="bg-emerald-600 px-5 py-2 rounded-full text-white" onClick={() => prop.onPress(prop.input)}>{prop.text}</button>
  )
}

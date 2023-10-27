import React from "react";

interface props {
  type: string;
  placeholder:string;
  onChange:Function;
}

export default function InputField(prop:props) {
  return (
    <div className="">
      <input className="bg-zinc-600 px-5 py-2 rounded-xl text-gray-400" placeholder={prop.placeholder} type={prop.type} onChange={(e) => prop.onChange(e.target.value)} />
    </div>
  );
}

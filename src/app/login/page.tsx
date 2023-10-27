"use client"

import InputField from "@/components/inputField";
import SubmitButton from "@/components/submitButton";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Page() {
    const [username, setUsername] = useState<string>('') 
    const [password, setPassword] = useState<string>('') 
    const { push } = useRouter()

    const login = async (input:any) =>{
        console.log(input.username)
        console.log(input.password)
        push('/')

    }


  return (
    <div className="bg-zinc-700 min-h-screen flex  flex-col justify-center items-center p-24">
      <div className="flex flex-col justify-between items-center gap-16">
        <div className="flex justify-center items-center">
          <h2 className="text-6xl text-gray-400 font-thin">Log in</h2>
        </div>
        <div className="flex  flex-col gap-8">
          <InputField type="email" placeholder="email" onChange={setUsername}/>
          <InputField type="password" placeholder="password" onChange={setPassword}/>
          <SubmitButton text="Log in" onPress={login} input={{username:username,password:password}}/>
        </div>
      </div>
    </div>
  );
}

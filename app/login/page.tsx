"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Login() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const login = async () => {

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if(error){
      alert(error.message);
    }else{
      alert("Login success");
    }

  };

  return (
    <div>

      <h1>Login</h1>

      <input
        placeholder="email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <br/>

      <input
        type="password"
        placeholder="password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <br/>

      <button onClick={login}>
        Login
      </button>

    </div>
  );
}
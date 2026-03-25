"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Signup() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const signup = async () => {

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if(error){
      alert(error.message);
    }else{
      alert("Signup success");
    }

  };

  return (
    <div>

      <h1>Signup</h1>

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

      <button onClick={signup}>
        Signup
      </button>

    </div>
  );
}
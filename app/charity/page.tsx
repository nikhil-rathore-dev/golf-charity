"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Charity() {

  const [list,setList]=useState<any[]>([]);
  const [user,setUser]=useState("");

  useEffect(()=>{

    const load = async()=>{

      const { data } = await supabase.auth.getUser();

      if(data.user){
        setUser(data.user.id);
      }

      const { data:ch } = await supabase
        .from("charities")
        .select("*");

      if(ch) setList(ch);

    };

    load();

  },[]);


  const selectCharity = async(id:string)=>{

    if(!user) return;

    await supabase
      .from("subscriptions")
      .insert({
        user_id:user,
        plan:"monthly",
        status:"active",
      });

    alert("Charity Selected");

  };


  return (

    <div>

      <h1>Charities</h1>

      {list.map((c)=>(
        <div key={c.id}>

          <p>{c.name}</p>

          <button
            onClick={()=>selectCharity(c.id)}
          >
            Select
          </button>

        </div>
      ))}

    </div>

  );
}
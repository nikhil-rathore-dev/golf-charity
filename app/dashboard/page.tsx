"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {

  const [email,setEmail]=useState("");
  const [draw,setDraw]=useState("");

  useEffect(()=>{

    const load = async()=>{

      const { data } = await supabase.auth.getUser();

      if(data.user){
        setEmail(data.user.email || "");
      }

      const { data:dr } = await supabase
        .from("draws")
        .select("*")
        .order("date",{ascending:false})
        .limit(1);

      if(dr && dr.length>0){
        setDraw(dr[0].numbers);
      }

    };

    load();

  },[]);

  return (
    <div>

      <h1>Dashboard</h1>

      <p>User:</p>
      <p>{email}</p>

      <h2>Last Draw</h2>

      <p>{draw}</p>

    </div>
  );
}
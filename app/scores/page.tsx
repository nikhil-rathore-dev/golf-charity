"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function Scores() {

  const [score,setScore]=useState("");
  const [scores,setScores]=useState<any[]>([]);
  const [user,setUser]=useState("");

  useEffect(()=>{

    const load = async()=>{

      const { data } = await supabase.auth.getUser();

      if(data.user){
        setUser(data.user.id);
        loadScores(data.user.id);
      }

    };

    load();

  },[]);


  const loadScores = async(uid:string)=>{

    const { data } = await supabase
      .from("scores")
      .select("*")
      .eq("user_id",uid)
      .order("date",{ascending:false});

    if(data) setScores(data);

  };


  const addScore = async()=>{

    if(!user) return;

    // get old scores
    const { data } = await supabase
      .from("scores")
      .select("*")
      .eq("user_id",user)
      .order("date",{ascending:true});

    if(data && data.length>=5){

      await supabase
        .from("scores")
        .delete()
        .eq("id",data[0].id);

    }

    await supabase
      .from("scores")
      .insert({
        user_id:user,
        score:parseInt(score),
        date:new Date()
      });

    setScore("");
    loadScores(user);

  };


  return (
    <div>

      <h1>Scores</h1>

      <input
        placeholder="score"
        value={score}
        onChange={(e)=>setScore(e.target.value)}
      />

      <button onClick={addScore}>
        Add
      </button>

      <ul>
        {scores.map((s)=>(
          <li key={s.id}>
            {s.score}
          </li>
        ))}
      </ul>

    </div>
  );
}
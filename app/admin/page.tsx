"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Page() {

  const [numbers,setNumbers] = useState("");

  const generate = async () => {

    let arr:number[] = [];

    for(let i=0;i<5;i++){
      arr.push(Math.floor(Math.random()*45)+1);
    }

    const nums = arr.join(",");

    setNumbers(nums);

    await supabase
      .from("draws")
      .insert({
        numbers: nums,
        date: new Date(),
        published: true
      });

  };

  return (
    <div>
      <h1>Admin Draw</h1>

      <button onClick={generate}>
        Generate Draw
      </button>

      <p>{numbers}</p>
    </div>
  );
}
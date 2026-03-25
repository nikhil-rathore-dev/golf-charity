import { supabase } from "@/lib/supabase";

export default async function TestPage() {

  const { data, error } = await supabase
    .from("scores")
    .select("*");

  return (
    <div>
      Test Page OK
    </div>
  );
}
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kfsqawjaanorgokalfwi.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtmc3Fhd2phYW5vcmdva2FsZndpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0NDQ5NzIsImV4cCI6MjA5MDAyMDk3Mn0.grzJWOcZKTCYfZmDVZpDkGRKaF7rd1in2I0_FzNzjHc";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
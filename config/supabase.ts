import { createClient } from "@supabase/supabase-js";

const supabaseURL = 'https://localhost:8000';
const supabaseKey = '183843848';
// const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const supabaseKey = process.env.NEXT_PUBLIC_ANON_KEY!;

const supabase = createClient(supabaseURL, supabaseKey);

export default supabase;

/*
import { Database } from '@/database.types'

const supabase = createClient<Database>(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!)

export default supabase;
*/
import { createBrowserClient } from '@supabase/ssr';
import { Database } from "@/database.types";

export const createSupabaseBrowserClient = () => 
  createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
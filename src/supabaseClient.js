import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const isConfigured =
  typeof supabaseUrl === 'string' &&
  supabaseUrl.startsWith('http') &&
  typeof supabaseAnonKey === 'string' &&
  supabaseAnonKey.length > 0;

export const supabase = isConfigured ? createClient(supabaseUrl, supabaseAnonKey) : null;

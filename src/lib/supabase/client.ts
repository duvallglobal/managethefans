import { createClient } from '@supabase/supabase-js';

// NOTE: This client is deprecated as the app has migrated to Firebase
// Keeping this file only for reference but not throwing errors
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder_key';

// Create a dummy client that won't be used
export const supabase = createClient(supabaseUrl, supabaseKey);

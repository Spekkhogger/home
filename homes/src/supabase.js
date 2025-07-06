import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lrzpvmovdefduytpwodj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyenB2bW92ZGVmZHV5dHB3b2RqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4MTc3OTIsImV4cCI6MjA2NzM5Mzc5Mn0.NTSDlBQjqlhyYaH9rqxUh4GJZGcj_6dMKEtm08BKlv8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
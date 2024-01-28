import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://uofgmiwfuqgcxfsxuvxx.supabase.co";
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvZmdtaXdmdXFnY3hmc3h1dnh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzNzU2MTksImV4cCI6MjAyMTk1MTYxOX0.bC8k6vmg1ufQDISPOwqqNBgiL3HDS_F0frx1au1W17I';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
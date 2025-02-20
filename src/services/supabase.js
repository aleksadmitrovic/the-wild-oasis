import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kaguipnayjtbmshpielm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthZ3VpcG5heWp0Ym1zaHBpZWxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5MTg1NDIsImV4cCI6MjA1MzQ5NDU0Mn0.4kvKufhzSuYjEbucWFQ4IyZ9-G6Q90Uj9dPcJ27SCqo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

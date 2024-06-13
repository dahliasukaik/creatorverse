import { createClient } from '@supabase/supabase-js';
const URL = 'https://dkqlatfaoacjwgqrsbdk.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrcWxhdGZhb2FjandncXJzYmRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzMTAzNTUsImV4cCI6MjAzMzg4NjM1NX0.9HkCK8KqOXqITT_sydsr4VLZtMJb_iSohCxrI1Z-tBU';
export const supabase = createClient(URL, API_KEY);

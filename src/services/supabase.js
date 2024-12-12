import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hocqlamirsklceilwflm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvY3FsYW1pcnNrbGNlaWx3ZmxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwMjA1NjgsImV4cCI6MjA0OTU5NjU2OH0.me-BrHSQicrMCzONvtzevNs7nsoPOqfC-ymW8cVxavc'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
Deno.serve(async (request) => {
  const auth = request.headers.get('Authorization') ?? '';
  const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_ANON_KEY')!, { global: { headers: { Authorization: auth } } });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
  const { data, error } = await supabase.from('students').select('*');
  return new Response(JSON.stringify({ data, error }), { headers: { 'Content-Type': 'application/json' } });
});

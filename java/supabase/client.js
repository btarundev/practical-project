import { createClient } from '@supabase/supabase-js';
const supabase=createClient(import.meta.env?.VITE_SUPABASE_URL||'YOUR_PROJECT_URL',import.meta.env?.VITE_SUPABASE_ANON_KEY||'YOUR_ANON_KEY');
export async function createStudent(student){return supabase.from('students').insert(student).select().single()}
export async function listStudents(){return supabase.from('students').select('*').order('created_at',{ascending:false})}
export async function updateStudent(id,changes){return supabase.from('students').update(changes).eq('id',id).select().single()}
export async function deleteStudent(id){return supabase.from('students').delete().eq('id',id)}
export async function signUp(email,password){return supabase.auth.signUp({email,password})}
export async function signIn(email,password){return supabase.auth.signInWithPassword({email,password})}
export async function uploadFile(file){return supabase.storage.from('uploads').upload(`public/${file.name}`,file,{upsert:true})}
export function listenForStudents(callback){return supabase.channel('students').on('postgres_changes',{event:'*',schema:'public',table:'students'},callback).subscribe()}

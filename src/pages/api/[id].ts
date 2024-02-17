import { supabase } from '@/utils/supabaseClient';
import { NextApiRequest, NextApiResponse } from 'next';
import { notFound } from 'next/navigation';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', req.query.id)
    .single();
  if (error) return res.status(500).json({ error: error.message });
  if (!data) notFound();
  return res.status(200).json(data);
}

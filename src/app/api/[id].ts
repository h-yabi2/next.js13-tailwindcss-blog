import { supabase } from '@/utils/supabaseClient';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { notFound } from 'next/navigation';

export async function GET(req: Request, res: NextApiResponse) {
  const id = req.url.split('/api/')[0];

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();
  if (error) NextResponse.json(error);
  if (!data) notFound();
  return NextResponse.json(data, { status: 200 });
}

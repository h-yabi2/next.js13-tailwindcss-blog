import { supabase } from '@/utils/supabaseClient';
import { NextResponse } from 'next/server';

export async function GET(req: Request, res: NextResponse) {
  const { data, error } = await supabase.from('posts').select('*');

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data);
}

export async function POST(req: Request, res: Response) {
  console.log('POST');
  const { id, title, content } = await req.json();
  console.log(id, title, content);

  const { data, error } = await supabase
    .from('posts')
    .insert([{ id, title, content, created_at: new Date().toISOString() }]);

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data);
}

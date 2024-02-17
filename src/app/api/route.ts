import { supabase } from '@/utils/supabaseClient';
import { NextResponse } from 'next/server';

export async function GET(req: Request, res: NextResponse) {
  const { data, error } = await supabase.from('posts').select('*');

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data);
}

export async function POST(req: Request, res: NextResponse) {
  const { id, title, content } = await req.json();
  const { data, error } = await supabase
    .from('posts')
    .insert([{ id, title, content, createdAt: new Date().toISOString() }]);

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 201 });
}

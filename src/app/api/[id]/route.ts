import { supabase } from '@/utils/supabaseClient';
import { NextResponse } from 'next/server';

export async function GET(req: Request, res: NextResponse) {
  const id = req.url.split('/api/')[1];
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 200 });
}

export async function DELETE(req: Request, res: NextResponse) {
  const id = req.url.split('/api/')[1];
  const { error: deleteError } = await supabase
    .from('posts')
    .delete()
    .eq('id', id);

  if (deleteError) {
    return NextResponse.json(deleteError);
  }

  return NextResponse.json({ status: 200 });
}

import { supabase } from '@/utils/supabaseClient';
import { NextApiRequest, NextApiResponse } from 'next';
import { notFound } from 'next/navigation';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', req.query.id)
        .single();
      if (error) return res.status(500).json({ error: error.message });
      if (!data) notFound();
      return res.status(200).json(data);

    case 'DELETE':
      const { error: deleteError } = await supabase
        .from('posts')
        .delete()
        .eq('id', req.query.id);
      if (deleteError)
        return res.status(500).json({ error: deleteError.message });
      return res.status(200).json({ message: '削除に成功しました' });
  }
}

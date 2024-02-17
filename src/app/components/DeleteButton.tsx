'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
// import { deleteArticle } from '@/blogAPI';

type DeleteButtonProps = {
  id: string;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();
  const handleDelete = async () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    await fetch(`${API_URL}/api/${id}`, {
      method: 'DELETE',
    });

    // await deleteArticle(id);
    router.push('/');
    router.refresh();
  };
  return (
    <div
      className="inline bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
      onClick={handleDelete}
    >
      削除
    </div>
  );
};

export default DeleteButton;

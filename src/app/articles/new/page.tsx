'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createArticle } from '@/blogAPI';

const CreateBlogPage = () => {
  const router = useRouter();
  const [id, setId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createArticle(id, title, content);
    router.push(`/`);
    router.refresh();
  };
  return (
    <div className="min-h-screen py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">ブログ新規作成</h2>
      <form className="p-y6 rounded" onSubmit={handleSumbit}>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="">
            URL
          </label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="">
            タイトル
          </label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="">
            本文
          </label>
          <textarea
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit" className="py-2 px-4 rounded-md bg-orange-300">
          投稿
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;

import React from 'react';

const CreateBlogPage = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">ブログ新規作成</h2>
      <form className="p-y6 rounded">
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="">
            URL
          </label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="">
            タイトル
          </label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="">
            本文
          </label>
          <textarea className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <button type="submit" className="py-2 px-4 rounded-md bg-orange-300">
          投稿
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;

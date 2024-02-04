import { Article } from './types';
import { notFound } from 'next/navigation';

export const getAllArticles = async (): Promise<Article[]> => {
  const response = await fetch(`http://localhost:3001/posts`, {
    cache: 'no-cache',
  });
  if (!response.ok) {
    throw new Error('サーバーエラーが発生しました');
  }
  const articles = await response.json();
  return articles;
};

export const getDetailArticle = async (id: string): Promise<Article> => {
  const response = await fetch(`http://localhost:3001/posts/${id}`, {
    next: { revalidate: 60 },
  });

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error('サーバーエラーが発生しました');
  }
  const articles = await response.json();
  return articles;
};

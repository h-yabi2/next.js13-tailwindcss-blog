import { Article } from './types';

export const getAllArticles = async (): Promise<Article[]> => {
  const response = await fetch(`http://localhost:3001/posts`, {
    cache: 'no-cache', // SSR になる
  });
  if (!response.ok) {
    throw new Error('サーバーエラーが発生しました');
  }
  const articles = await response.json();
  return articles;
};

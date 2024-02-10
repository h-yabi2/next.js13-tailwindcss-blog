import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/types';

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article key={article.id} className="shadow my-4">
      <Link
        href={`articles/${article.id}`}
        className="hover:opacity-90 transition-opacity"
      >
        <Image
          src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`}
          alt="Article"
          width={800}
          height={600}
        />
      </Link>
      <div className="bg-white p-6 flex flex-col justify-start">
        <Link href={`articles/${article.id}`}>Technology</Link>
        <Link
          href={`articles/${article.id}`}
          className="text-2xl font-bold my-1"
        >
          {article.title}
        </Link>
        <p className="text-sm pb-5">Published on {article.createdAt}</p>
        <Link href={`articles/${article.id}`}>
          {article.content.length > 70
            ? `${article.content.substring(0, 70)}...`
            : article.content}
        </Link>
        <Link
          href={`articles/${article.id}`}
          className="mt-5 text-pink-800 hover:underline"
        >
          Read more
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;

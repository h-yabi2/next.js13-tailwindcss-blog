import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4">
        <Link href="#" className="hover:opacity-90 transition-opacity">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
            alt="Article"
            width={800}
            height={600}
          />
        </Link>
        <div className="bg-white p-6 flex flex-col justify-start">
          <Link href="#">Technology</Link>
          <Link href="#" className="text-2xl font-bold my-1">
            Next.js の学習中
          </Link>
          <p className="text-sm pb-5">Published on 2050-01-01</p>
          <Link href="#">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </Link>
          <Link href="#" className="mt-5 text-pink-800 hover:underline">
            Read more
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;

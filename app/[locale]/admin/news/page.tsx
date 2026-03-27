'use client';

import { useEffect, useState } from 'react';
import { getAdminNews } from '@/services';
import NewsCard from '@/components/NewCard';

export default function NewsPage() {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    const loadNews = async () => {
      const res = await getAdminNews();

      const data = Array.isArray(res?.data)
        ? res.data
        : Array.isArray(res)
          ? res
          : [];

      setNews(data);
    };

    loadNews();
  }, []);

  return (
    <section>
      <h1 className="mb-8 text-4xl font-extrabold">News</h1>

      <div className="flex items-end gap-8 mt-30">
        <div className="grid grid-cols-3 h-69.25 gap-8 flex-1">
          {Array.isArray(news) &&
            news
              .slice(0, 3)
              .map((item: any) => (
                <NewsCard
                  key={item.id}
                  image={item?.image || item?.images?.[0]}
                  text={item?.description || item?.text}
                  name={item?.author?.firstName || item?.name || 'Admin'}
                  avatar={
                    item?.author?.avatar ||
                    'https://anorkhulov.uz/uploads/default-avatar.png'
                  }
                />
              ))}
        </div>
      </div>
    </section>
  );
}

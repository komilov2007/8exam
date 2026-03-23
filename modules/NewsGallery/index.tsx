'use client';

import NewsCard from '@/components/NewCard';
import { useNews } from '@/hooks/useNews';

const NewsGallery = () => {
  const { data, isLoading, isError } = useNews();

  const news = data?.data || data || [];

  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }

  if (isError) {
    return <p className="text-center">News yuklashda xatolik</p>;
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-40 text-[48px] font-extrabold">
          Новости/Галерея
        </h2>

        <div className="flex items-end gap-8">
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
      </div>
    </section>
  );
};

export default NewsGallery;

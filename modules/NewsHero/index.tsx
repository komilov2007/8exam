'use client';
import HeadBtm from '@/components/HeadBtm';
import NewsHeroItm from '@/components/NewPageItem';
import Pagination from '@/components/Pagination';
import { MenuRight } from '@/components/svgindex';
import Link from 'next/link';
import NewsPageGallery from '../NewsPageGallery';
import NewsCard from '@/components/NewCard';
import { useNews } from '@/hooks/useNews';
const NewsHero = () => {
  const { data, isLoading, isError } = useNews();

  const news = data?.data || data || [];

  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }

  if (isError) {
    return <p className="text-center">News yuklashda xatolik</p>;
  }
  return (
    <section className="-mt-8 pb-20">
      <div className="">
        <div className="relative  h-500 rounded-[34px] bg-white/40 backdrop-blur-[10px] shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          <HeadBtm />
          <div className="flex mt-25 ml-10">
            <Link
              href="/"
              className="text-[#626464] flex items-center justify-center gap-2"
            >
              Главная{' '}
              <span className="mt-1">
                <MenuRight />
              </span>
            </Link>
            <Link href="/news">
              {' '}
              <span className="text-black ml-1">Новости</span>
            </Link>
          </div>
          <h2 className="text-center mt-8 mb-40 text-[48px] font-extrabold">
            Новости
          </h2>
          <div className="flex items-end gap-8">
            <div className="grid grid-cols-3 max-w-7xl ml-10 mr-10 gap-8 flex-1">
              {news.map((item: any) => (
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
          <div className="-mt-7! mb-10">
            {' '}
            <Pagination />
          </div>
          <NewsPageGallery />
          <div className="mt-10 pb-20">
            <Pagination />{' '}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsHero;

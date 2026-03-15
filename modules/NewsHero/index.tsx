'use client';
import HeadBtm from '@/components/HeadBtm';
import NewsHeroItm from '@/components/NewPageItem';
import Pagination from '@/components/Pagination';
import { MenuRight } from '@/components/svgindex';
import Link from 'next/link';
import NewsPageGallery from '../NewsPageGallery';
const NewsHero = () => {
  const cards = [
    {
      id: 1,
      image: '/gallery.png',
      text: 'Используйте новые структуры, чтобы представить исходный обзор или добраться быстрее, проектируя поход к самым эффективным.',
      name: 'Сергей',
      avatar: '/sergey.png',
    },
    {
      id: 2,
      image: '/gallery.png',
      text: 'Используйте новые структуры, чтобы представить исходный обзор или добраться быстрее, проектируя поход к самым эффективным.',
      name: 'Сергей',
      avatar: '/sergey.png',
    },
    {
      id: 3,
      image: '/gallery.png',
      text: 'Используйте новые структуры, чтобы представить исходный обзор или добраться быстрее, проектируя поход к самым эффективным.',
      name: 'Сергей',
      avatar: '/sergey.png',
    },
  ];
  return (
    <section className="-mt-8 pb-10">
      <div className="">
        <div className="relative h-376  rounded-[34px] bg-white/40 backdrop-blur-[10px] shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          <HeadBtm />
          {/* link uchun */}
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
          <h2 className="text-center mt-8 text-[48px] font-extrabold">
            Новости
          </h2>
          <div className="flex items-end max-w-6xl mx-auto mt-30 gap-8">
            <div className="grid grid-cols-3 h-69.25 gap-8 flex-1">
              {cards.map((item) => (
                <NewsHeroItm
                  key={item.id}
                  image={item.image}
                  text={item.text}
                  name={item.name}
                  avatar={item.avatar}
                />
              ))}
            </div>
          </div>
          <div className="mt-7 mb-10">
            <Pagination />
          </div>
          <NewsPageGallery />
          <div className="mt-10 mb-10">
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsHero;

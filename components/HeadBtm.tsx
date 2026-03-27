'use client';

import { memo, useEffect, useState } from 'react';
import Link from 'next/link';
import { Basket, FooterLogo, Like } from './svgindex';
import { usePathname } from 'next/navigation';
import { getLikedCount } from '@/services';

const HeadBtm = () => {
  const menu = [
    { name: 'Меню', path: '/menu' },
    { name: 'Новости', path: '/news' },
    { name: 'Бронирование', path: '/order' },
    { name: 'О нас', path: '/about' },
    { name: 'Контакты', path: '/contacts' },
  ];

  const pathname = usePathname();
  const [likedCount, setLikedCount] = useState(0);
  const [basketCount, setBasketCount] = useState(0);

  const loadCounts = () => {
    setLikedCount(getLikedCount());

    const basket = localStorage.getItem('basketProducts');
    const parsedBasket = basket ? JSON.parse(basket) : [];

    const totalBasketCount = parsedBasket.reduce(
      (acc: number, item: any) => acc + item.quantity,
      0
    );

    setBasketCount(totalBasketCount);
  };

  useEffect(() => {
    loadCounts();

    const interval = setInterval(() => {
      loadCounts();
    }, 500);

    return () => clearInterval(interval);
  }, [pathname]);

  return (
    <div className="relative z-20 mt-10 flex items-center justify-between px-9.5 pt-8">
      <h1 className="text-[52px] leading-none font-extrabold tracking-tight">
        <FooterLogo />
      </h1>

      <ul className="flex items-center gap-10.5 text-[16px] font-medium text-black">
        {menu.map((item) => (
          <li key={item.path} className="cursor-pointer">
            <Link
              href={item.path}
              className={pathname === item.path ? 'text-red-500' : 'text-black'}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-black">
          <Link href="/like" className="text-[16px]">
            <Like />
          </Link>

          {likedCount > 0 && (
            <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-0.5 text-[10px] font-bold text-white">
              {likedCount}
            </span>
          )}
        </div>

        <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-black">
          <Link href="/basket" className="text-[15px]">
            <Basket />
          </Link>

          {basketCount > 0 && (
            <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-0.5 text-[10px] font-bold text-white">
              {basketCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(HeadBtm);

'use client';
import { memo } from 'react';
import Link from 'next/link';
import { Basket, FooterLogo, Like } from './svgindex';
import { usePathname } from 'next/navigation';

const HeadBtm = () => {
  const menu = [
    { name: 'Меню', path: '/menu' },
    { name: 'Новости', path: '/news' },
    { name: 'Бронирование', path: '/order' },
    { name: 'О нас', path: '/about' },
    { name: 'Контакты', path: '/contacts' },
  ];
  const pathname = usePathname();
  return (
    <div className="relative mt-10 z-20 flex items-center justify-between px-9.5 pt-8">
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
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black">
          <span className="text-[16px]">
            <Like />
          </span>
        </div>

        <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-black">
          <span className="text-[15px]">
            <Basket />
          </span>

          <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full bg-red-500 text-[10px] font-bold text-white flex items-center justify-center">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(HeadBtm);

'use client';
import BlyudaItem from '@/components/BlyudeItem';
import HeadBtm from '@/components/HeadBtm';
import MenuHeroItem from '@/components/MenuHeroIt';
import { MenuRight } from '@/components/svgindex';
import Link from 'next/link';
import { useState } from 'react';
const MenuHero = () => {
  const [active, setActive] = useState('Первые');
  const cards = [
    {
      id: 1,
      image: '/potato.png',
      text: 'Chicken soup',
      name: 'Spicy with garlic',
      price: '$10.00',
    },
    {
      id: 2,
      image: '/potato.png',
      text: 'Chicken soup',
      price: '$10.00',
      name: 'Spicy with garlic',
    },
    {
      id: 3,
      image: '/potato.png',
      text: 'Chicken soup',
      price: '$10.00',
      name: 'Spicy with garlic',
    },
    {
      id: 4,
      image: '/potato.png',
      text: 'Chicken soup',
      price: '$10.00',
      name: 'Spicy with garlic',
    },
    {
      id: 5,
      image: '/potato.png',
      text: 'Chicken soup',
      price: '$10.00',
      name: 'Spicy with garlic',
    },
    {
      id: 6,
      image: '/potato.png',
      text: 'Chicken soup',
      price: '$10.00',
      name: 'Spicy with garlic',
    },
    {
      id: 7,
      image: '/potato.png',
      text: 'Chicken soup',
      price: '$10.00',
      name: 'Spicy with garlic',
    },
    {
      id: 8,
      image: '/potato.png',
      text: 'Chicken soup',
      price: '$10.00',
      name: 'Spicy with garlic',
    },
    {
      id: 9,
      image: '/potato.png',
      text: 'Chicken soup',
      price: '$10.00',
      name: 'Spicy with garlic',
    },
    {
      id: 10,
      image: '/potato.png',
      text: 'Chicken soup',
      price: '$10.00',
      name: 'Spicy with garlic',
    },
    {
      id: 11,
      image: '/potato.png',
      text: 'Chicken soup',
      price: '$10.00',
      name: 'Spicy with garlic',
    },
    {
      id: 12,
      image: '/potato.png',
      text: 'Chicken soup',
      price: '$10.00',
      name: 'Spicy with garlic',
    },
    {
      id: 13,
      image: '/potato.png',
      text: 'Chicken soup',
      price: '$10.00',
      name: 'Spicy with garlic',
    },
    {
      id: 14,
      image: '/potato.png',
      text: 'Chicken soup',
      price: '$10.00',
      name: 'Spicy with garlic',
    },
    {
      id: 15,
      image: '/potato.png',
      text: 'Chicken soup',
      price: '$10.00',
      name: 'Spicy with garlic',
    },
    {
      id: 16,
      image: '/potato.png',
      text: 'Chicken soup',
      price: '$10.00',
      name: 'Spicy with garlic',
    },
  ];
  const categories = ['Первые', 'Вторые', 'Салаты', 'Напитки', 'Фаст-Фуд'];
  return (
    <section className="-mt-8 pb-10">
      <div className="">
        <div className="relative h-556  rounded-[34px] bg-white/22 backdrop-blur-[10px] shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
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
            <Link href="/menu">
              {' '}
              <span className="text-black ml-1">Меню</span>
            </Link>
          </div>
          <h2 className="text-center mt-8 text-[48px] font-extrabold">Меню</h2>
          {/* filter uchun navbari  */}
          <div className="flex items-center justify-center mt-14">
            <nav className="w-164 h-13.5 bg-white/35 rounded-[27px] flex items-center justify-around">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setActive(item)}
                  className={`px-4 h-8.5 rounded-[27px] transition ${
                    active === item ? 'bg-white/50' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex mt-37 items-end gap-2">
            <div className="grid grid-cols-4 h-69.25 gap-10   ml-10 flex-1">
              {cards.map((item) => (
                <MenuHeroItem
                  key={item.id}
                  image={item.image}
                  text={item.text}
                  name={item.name}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuHero;

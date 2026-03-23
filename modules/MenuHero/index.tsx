'use client';

import HeadBtm from '@/components/HeadBtm';
import MenuHeroItem from '@/components/MenuHeroIt';
import { MenuRight } from '@/components/svgindex';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { useCategories } from '@/hooks/useCategories';

const MenuHero = () => {
  const [active, setActive] = useState<string>('all');

  const { data: productsData, isLoading, isError } = useProducts();
  const { data: categoriesData } = useCategories();

  const products = Array.isArray(productsData?.data)
    ? productsData.data
    : Array.isArray(productsData)
      ? productsData
      : [];

  const categories = Array.isArray(categoriesData?.data)
    ? categoriesData.data
    : Array.isArray(categoriesData)
      ? categoriesData
      : [];

  const filteredProducts = useMemo(() => {
    if (active === 'all') return products;

    return products.filter((item: any) => {
      const categoryId =
        item?.category?.id || item?.categoryId || item?.category_id;

      return String(categoryId) === String(active);
    });
  }, [active, products]);

  return (
    <section className="-mt-8 pb-10 relative">
      <div>
        <div className="relative rounded-[34px] bg-white/22 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-[10px]">
          <HeadBtm />

          <div className="ml-10 mt-25 flex">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 text-[#626464]"
            >
              Главная
              <span className="mt-1">
                <MenuRight />
              </span>
            </Link>

            <Link href="/menu">
              <span className="ml-1 text-black">Меню</span>
            </Link>
          </div>

          <h2 className="mt-8 text-center text-[48px] font-extrabold">Меню</h2>

          <div className="mt-14  flex items-center justify-center">
            <nav className="flex min-w-164 items-center justify-center gap-3 rounded-[27px] bg-white/35 px-4 py-3">
              <button
                onClick={() => setActive('all')}
                className={`rounded-[27px] px-4 py-2 transition ${
                  active === 'all' ? 'bg-white/50' : ''
                }`}
              >
                Все
              </button>

              {categories.map((item: any) => (
                <button
                  key={item.id}
                  onClick={() => setActive(String(item.id))}
                  className={`rounded-[27px] px-4 py-2 transition ${
                    active === String(item.id) ? 'bg-white/50' : ''
                  }`}
                >
                  {item.name || item.title}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-25 flex items-end gap-2">
            <div className="ml-10 grid flex-1 grid-cols-4 gap-10">
              {isLoading ? (
                <p>Loading...</p>
              ) : isError ? (
                <p>Xatolik yuz berdi</p>
              ) : filteredProducts.length > 0 ? (
                filteredProducts.map((item: any) => (
                  <MenuHeroItem
                    key={item.id}
                    id={item.id}
                    image={item?.image || item?.images?.[0] || ''}
                    text={item?.title || item?.name || 'No title'}
                    name={item?.description || 'No description'}
                    price={item?.price || 0}
                  />
                ))
              ) : (
                <p className="text-center">Mahsulot topilmadi</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuHero;

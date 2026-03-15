'use client';
import HeadBtm from '@/components/HeadBtm';
import { MenuRight } from '@/components/svgindex';
import Link from 'next/link';
import OrderHeroItem from '@/components/OrderHero';
import OrderFormSection from '@/components/OrderFormSection';
import OrderContactSection from '@/components/OrderContactSection';
const OrderHero = () => {
  return (
    <section className="-mt-8 pb-10">
      <div className="">
        <div className="relative h-546  rounded-[34px] bg-white/40 backdrop-blur-[10px] shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
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
              <span className="text-black ml-1">Бронирование</span>
            </Link>
          </div>
          <h2 className="text-center mt-8 text-[48px] font-extrabold">
            Бронирование
          </h2>
          <OrderHeroItem />
          <div>
            <OrderFormSection />
            <OrderContactSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderHero;

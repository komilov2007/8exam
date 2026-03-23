import HeadBtm from '@/components/HeadBtm';
import OrderContactSection from '@/components/OrderContactSection';
import OrderFormSection from '@/components/OrderFormSection';
import OrderHeroItem from '@/components/OrderHero';
import { MenuRight } from '@/components/svgindex';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="relative rounded-[34px] max-w-7xl mx-auto bg-white/22 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-[10px]">
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
        <Link href="/contacts">
          <span className="ml-1 text-black">Контакты</span>
        </Link>
      </div>
      <div>
        <div>
          <OrderContactSection />
        </div>
        <div className="max-w-4xl mx-auto mt-20 mb-20">
          <h2 className="text-center text-[28px] font-bold leading-none text-black">
            Написать нам
          </h2>

          <div className="flex flex-col justify-center items-center mt-10 gap-5">
            <input
              type="text"
              placeholder="Ваше имя"
              className="h-10 border w-full p-2.5"
            />

            <input
              type="email"
              placeholder="Ваш E-mail"
              className="h-10 border w-full pl-10"
            />

            <input
              type="text"
              placeholder="Ваш номер телефона"
              className="h-10 border w-full pl-10"
            />

            <input
              type="text"
              placeholder="Ваше сообщение"
              className="h-10 border w-full pl-10"
            />

            <div className="mt-5 mb-10 w-full flex justify-end ">
              <button className="w-42.25 rounded-[9px] bg-black text-[14px] font-medium text-white">
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

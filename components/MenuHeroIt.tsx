import { NewsCardHero } from '@/@types';
import Image from 'next/image';
import { BasketWhite, Like } from './svgindex';

const MenuHeroItem = ({ image, text, name, price }: NewsCardHero) => {
  return (
    <div className="relative w-65.75 h-77.5 mb-20 rounded-[38px] bg-white/30 backdrop-blur-md px-5 pb-5 pt-14 shadow-md">
      <div className="absolute w-65.75 h-49.25 -top-17 left-32 -translate-x-1/2">
        <div className="relative w-60.75 g ml-3 h-60   overflow-hidden border-2 border-green-500">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
      </div>
      <div className="">
        <p className="mt-32 flex items-center justify-between leading-5 text-black font-bold text-[24px] mb-5">
          {text}
          <span>
            <Like />
          </span>
        </p>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-[15px] font-light">{name}</span>
      </div>

      <div className="mt-1 flex items-end justify-between">
        <span className="text-[24px] font-bold">{price}</span>
        <button className="w-10 h-10 flex items-center justify-center bg-black rounded-[5px] text-white">
          <BasketWhite />
        </button>
      </div>
    </div>
  );
};

export default MenuHeroItem;

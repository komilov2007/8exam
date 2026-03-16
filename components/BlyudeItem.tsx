import { NewsCardHero } from '@/@types';
import Image from 'next/image';
import { BasketWhite, Like } from './svgindex';

const BlyudaItem = ({ image, text, name, price }: NewsCardHero) => {
  return (
    <div className="relative h-110 w-full  px-5 pb-5 pt-14 ">
      <div className="absolute  top-0 h-49.25 w-65.75 ">
        <div className="relative h-63.25 w-60.75 -ml-1 border-2 border-green-500">
          <Image src={image} alt={name} fill className="object-contain" />
        </div>
      </div>
      <div className=" bg-white/30 w-68 h-77.5 pl-5 pr-5 -mt-20 rounded-[38px] -ml-5">
        <p className="mt-32 pt-40 mb-5 flex items-center justify-between text-[24px] leading-5 font-bold text-black">
          {text}
          <span>
            <Like />
          </span>
        </p>

        <div className="flex items-center gap-2">
          <span className="text-[15px] font-light">{name}</span>
        </div>

        <div className="mt-3 flex items-end justify-between">
          <span className="text-[24px] font-bold">{price}</span>
          <button className="flex h-10 w-10 items-center justify-center rounded-[5px] bg-black text-white">
            <BasketWhite />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlyudaItem;

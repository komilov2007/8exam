import { NewsCardProps } from '@/@types';
import Image from 'next/image';

const NewsHeroItm = ({ image, text, name, avatar }: NewsCardProps) => {
  return (
    <div className="relative rounded-[22px] mb-30 bg-white/30 backdrop-blur-md px-5 pb-5 pt-14 shadow-md">
      <div className="absolute w-53.25 h-39.25 -top-22 left-32 -translate-x-1/2">
        <div className="relative w-53.25 h-39.25  rounded-[18px] overflow-hidden border-2 border-green-500">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
      </div>

      <p className="mt-10 leading-5 text-black/70 mb-5">{text}</p>

      <div className="flex items-center gap-2">
        <div className="relative w-11 h-11 rounded-full overflow-hidden">
          <Image src={avatar} alt={name} fill className="object-cover" />
        </div>

        <span className=" font-bold">{name}</span>
      </div>
    </div>
  );
};

export default NewsHeroItm;

import HeadBtm from '@/components/HeadBtm';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="-mt-8 pb-10">
      <div className="">
        <div className="relative h-225  rounded-[34px] bg-white/22 backdrop-blur-[10px] shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          <HeadBtm />

          <div className="relative z-20 flex h-full px-9.5 pb-9.5">
            <div className="flex w-105 flex-col justify-center pl-1">
              <h2 className="max-w-90 text-[64px] font-extrabold leading-[1.75] tracking-[-0.03em] text-black">
                ВКУСНАЯ ЕДА ЖДЕТ ТЕБЯ!
              </h2>

              <button className="mt-10 w-fit rounded-xl bg-black px-7 py-4 text-[16px] font-medium text-white">
                Посмотреть меню →
              </button>
            </div>
            <div className="relative flex-1">
              <div className="absolute right-13.75 top-26.25 h-155 w-155">
                <Image
                  src="/heropizza.png"
                  alt="dish"
                  fill
                  priority
                  className="object-contain w-153.25 h-152.25 -mt-8"
                />
              </div>
              <Image
                src="/leaf4.png"
                alt="leaf"
                width={150}
                height={150}
                className="absolute -left-156 -top-4   w-90 h-90 object-contain"
              />
              <Image
                src="/leaf.png"
                alt="leaf"
                width={135}
                height={135}
                className="absolute left-[-140] top-20.75 w-90 h-90 -rotate-30 object-contain"
              />

              <Image
                src="/leaff.png"
                alt="leaf"
                width={150}
                height={150}
                className="absolute w-55 h-55 left-17.5 bottom-35.5  object-contain"
              />

              <Image
                src="/leaf.png"
                alt="leaf"
                width={150}
                height={150}
                className="absolute left-130 top-70  w-90 h-90 -rotate-80 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

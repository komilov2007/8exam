import Image from 'next/image';
import { Qoshiq } from '@/components/svgindex';

const Bron = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto ">
        <div className="w-115 h-170 relative rounded-[30px] bg-white/30 backdrop-blur-md p-10 shadow-lg">
          <div className="w-24 h-24 rounded-full absolute -top-12 left-10 bg-black flex items-center justify-center">
            <Qoshiq />
          </div>

          <h2 className="text-[28px] font-bold mt-16 mb-10">
            Забронировать стол
          </h2>

          <form className="flex flex-col gap-8">
            <input
              type="text"
              placeholder="Ваш номер"
              className="border-b border-black/30 bg-transparent outline-none pb-2"
            />

            <select className="border-b border-black/30 bg-transparent outline-none pb-2">
              <option>На сколько человек?</option>
              <option>1 человек</option>
              <option>2 человека</option>
              <option>3 человека</option>
            </select>

            <input
              type="date"
              className="border-b border-black/30 bg-transparent outline-none pb-2"
            />

            <input
              type="time"
              className="border-b border-black/30 bg-transparent outline-none pb-2"
            />

            <select className="border-b border-black/30 bg-transparent outline-none pb-2">
              <option>Выберите место</option>
              <option>У окна</option>
              <option>Внутри</option>
              <option>На улице</option>
            </select>

            <p className="text-sm text-black/60">Будет мест около моря</p>

            <button className="bg-black text-white px-7 py-3 rounded-xl w-fit">
              Забронировать
            </button>
          </form>
        </div>
      </div>
      {/* ongtomon */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-187.5 h-187.5">
        <Image
          src="/pizza.png"
          alt="pizza"
          fill
          className="object-contain object-right"
        />
      </div>
      <Image
        src="/leaf.png"
        alt="leaf"
        width={120}
        height={120}
        className="absolute top-0 w-100 h-100 left-[33%] rotate-2"
      />
      <Image
        src="/leaf.png"
        alt="leaf"
        width={130}
        height={130}
        className="absolute bottom-0 left-[50%] w-100 h-100 rotate-80"
      />{' '}
    </section>
  );
};

export default Bron;

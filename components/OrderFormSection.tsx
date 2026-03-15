import { Calendar, Clock, Past } from './svgindex';

const OrderFormSection = () => {
  return (
    <section className="w-full flex justify-center px-4">
      <div className="w-full max-w-5xl">
        <h2 className="text-center text-4xl font-extrabold text-black">
          Хотите забронировать стол?
        </h2>

        <div className="mx-auto mt-12 max-w-4xl">
          <form className="space-y-7">
            <div className="border-b border-black/40 pb-2">
              <input
                type="text"
                placeholder="Ваш номер"
                className="w-full bg-transparent text-sm text-black placeholder:text-black/45 outline-none"
              />
            </div>

            <div className="flex items-center justify-between border-b border-black/40 pb-2">
              <select className="w-full appearance-none bg-transparent text-sm text-black outline-none">
                <option>На сколько человек?</option>
              </select>
              <Past />
            </div>

            <div className="flex items-center justify-between border-b border-black/40 pb-2">
              <input
                type="text"
                placeholder="Выберите дату"
                className="w-full bg-transparent text-sm text-black placeholder:text-black/45 outline-none"
              />
              <Calendar />
            </div>

            <div className="flex items-center justify-between border-b border-black/40 pb-2">
              <input
                type="text"
                placeholder="Выберите время"
                className="w-full bg-transparent text-sm text-black placeholder:text-black/45 outline-none"
              />
              <Clock />
            </div>

            <div className="flex items-center justify-between border-b border-black/40 pb-2">
              <select className="w-full appearance-none bg-transparent text-sm text-black outline-none">
                <option>Выберите место</option>
              </select>
              <Past />
            </div>

            <button
              type="button"
              className="text-left text-[11px] text-[#3d39ff] underline underline-offset-2"
            >
              Выбрать место на карте
            </button>

            <div className="flex justify-end pt-2">
              <button className="rounded-2xl bg-black px-8 py-4 text-sm font-medium text-white transition hover:opacity-90">
                Забронировать
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderFormSection;

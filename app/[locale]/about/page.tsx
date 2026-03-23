import Image from 'next/image';
import HeadBtm from '@/components/HeadBtm';
import { Right } from '@/components/svgindex';

const AboutPage = () => {
  return (
    <section className="-mt-8 pb-20">
      <div className="relative mx-auto max-w-7xl rounded-[34px] bg-white/35 px-8 pb-16 backdrop-blur-[10px] shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
        <HeadBtm />
        <div className="mt-10 text-[12px] text-black/60">
          Главная &gt; О нас
        </div>
        <h1 className="mt-8 text-center text-[40px] font-extrabold text-black">
          О нас
        </h1>
        <div className="mx-auto mt-8 max-w-5xl space-y-4 text-[13px] leading-6 text-black/80">
          <p>
            С 1995 года наша миссия в ресторане — питать и вдохновлять каждого
            члена команды, гостя и сообщество, которому мы служим. Спустя все
            эти годы эти основные ценности остаются в основе всего, что мы
            делаем. От нашего меню до наших услуг и способов ведения бизнеса —
            наш свежий, неожиданный и человечный взгляд отличает нас. Мы
            называем это Необыкновенной Добротой. И это во всем, что мы делаем..
          </p>

          <p>
            Имея более 450 ресторанов в 26 штатах и ​​более 8000 членов команды,
            мы два года подряд были названы Forbes одним из лучших работодателей
            Америки в области разнообразия. Денверский деловой журнал признал
            нас одним из лучших мест для работы. Мы считаем, что эти успехи
            основаны на нашей уникальной и заботливой культуре, благодаря
            которой каждый, кто входит в наши двери, чувствует себя желанным
            гостем и оцененным по достоинству.
          </p>
        </div>
        <div className="">
          <div className="w-141">
            <h1 className="mt-20">Наша еда</h1>
            <p>
              Наша страсть — создавать исключительные впечатления от еды по
              отличной цене. От традиционных и современных блюд до наших
              собственных кулинарных творений, таких как фаршированные
              тортеллони премиум-класса, наши свежеприготовленные рецепты
              отличаются индивидуальностью, креативностью и ярким вкусом кухонь
              всего мира.
            </p>
            <p>
              От «Пенне Роза» до японской лапши, салата «Мед» и всемирно
              известных макарон с сыром «Висконсин» — мы используем только самые
              лучшие и полезные ингредиенты. Каждое блюдо готовится свежим и
              делается на заказ. Наше богатое меню наполнено яркими, яркими и
              приятными вкусами.
            </p>
            <button className="shrink-0 flex items-center justify-center gap-5 w-70 rounded-xl mt-10 bg-black px-5 py-3 text-white text-sm">
              Посмотреть все <Right />
            </button>
          </div>
          <div className="">
            <Image
              src="/food1.png"
              alt="mm"
              width={100}
              height={100}
              className="w-90 h-120"
            />
          </div>
        </div>
        {/* foo1 */}
        <div className="w-full min-h-126.5 bg-[linear-gradient(90deg,#d9d2cb_0%,#e6d7ca_45%,#e7c3bb_100%)]">
          <div className="mx-auto flex min-h-126.5 max-w-360 items-center justify-between px-11 py-5.5">
            <div className="max-w-162.5">
              <h2 className="mb-10 text-[52px] font-bold leading-none text-black">
                Наша еда
              </h2>

              <p className="mb-8 max-w-152.5 text-[18px] leading-[1.65] text-black/80">
                Наша страсть — создавать исключительные впечатления от еды по
                отличной цене. От традиционных и современных блюд до наших
                собственных кулинарных творений, таких как фаршированные
                тортеллони премиум-класса, наши свежеприготовленные рецепты
                отличаются индивидуальностью, креативностью и ярким вкусом
                кухонь всего мира.
              </p>

              <p className="mb-10 max-w-152.5 text-[18px] leading-[1.65] text-black/80">
                От «Пенне Розэ» до японской лапши, салата «Мед» и всемирно
                известных макарон с сыром «Висконсин» — мы используем только
                самые лучшие и полезные ингредиенты. Каждое блюдо готовится
                свежим и делается на заказ. Наше богатое меню наполнено яркими,
                яркими и приятными вкусами.
              </p>

              <button className="inline-flex h-13.5 items-center gap-3 rounded-[12px] bg-black px-7 text-[16px] font-medium text-white">
                Посмотреть меню
                <span className="text-[18px]">→</span>
              </button>
            </div>

            <div className="relative h-108.5 w-81.25 overflow-hidden rounded-[34px] border border-emerald-500 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <Image
                src="/food.png"
                alt="food"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        {/* foo2 */}
        <div className="mt-20 grid grid-cols-2 items-center gap-14">
          <div>
            <div className="overflow-hidden rounded-[24px] border-[3px] border-[#00d084]">
              <Image
                src="/food2.png"
                alt="Наш путь"
                width={360}
                height={300}
                className="h-75 w-90 object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-[34px] font-extrabold text-black">
              Наш путь
            </h2>

            <div className="space-y-4 text-[13px] leading-6 text-black/80">
              <p>
                С самого первого дня мы хотели создать место, где еда будет
                объединять людей. Поэтому наш путь — это не только развитие
                кухни, но и создание атмосферы, в которую хочется возвращаться.
              </p>
              <p>
                Мы растём вместе с нашими гостями, учимся, пробуем новое и при
                этом сохраняем главные ценности: искренность, качество и
                гостеприимство.
              </p>

              <p>
                Сегодня мы продолжаем делать то, во что верим: готовить честную,
                вкусную еду и наполнять каждый визит уютом и приятными эмоциями.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

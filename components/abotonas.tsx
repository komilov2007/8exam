import Image from 'next/image';
import HeadBtm from '@/components/HeadBtm';
import { MenuRight } from '@/components/svgindex';
import Link from 'next/link';

const AboutPage = () => {
  const newLocal =
    'mb-6 flex h-[290px] w-[290px] items-center justify-center rounded-full border border-black/40';
  return (
    <section className="-mt-8 pb-20">
      <div className="relative mx-auto max-w-7xl rounded-[34px] bg-white/35 px-8 pb-16 backdrop-blur-[10px] shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
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

          <Link href="/about">
            <span className="ml-1 text-black">О нас</span>
          </Link>
        </div>
        <h1 className="mt-8 text-center text-[40px] font-extrabold text-black">
          О нас
        </h1>
        <div className="mx-auto mt-8 max-w-6xl font-extrabold space-y-4 text-[20px] leading-6 text-black/80">
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
        {/* <div className="">
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
        </div> */}
        {/* foo1 */}
        <div className="w-full min-h-126.5 mt-20">
          <div className="mx-auto flex min-h-126.5 max-w-360 items-center justify-between px-11 py-5.5">
            <div className="max-w-162.5">
              <h2 className="mb-10 text-[52px] font-bold leading-none text-black">
                Наша еда
              </h2>

              <p className="mb-10 max-w-152.5 text-[20px] leading-[1.65] text-black/80">
                Наша страсть — создавать исключительные впечатления от еды по
                отличной цене. От традиционных и современных блюд до наших
                собственных кулинарных творений, таких как фаршированные
                тортеллони премиум-класса, наши свежеприготовленные рецепты
                отличаются индивидуальностью, креативностью и ярким вкусом
                кухонь всего мира.
              </p>

              <p className="mb-12 max-w-152.5 text-[20px] leading-[1.65] text-black/80">
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

            <div className="relative max-w-6xl ml-10 h-169 w-125.25 overflow-hidden rounded-[49px] border border-emerald-500 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <Image
                src="/food1.png"
                alt="food"
                fill
                className="w-185.75 h-20 "
                priority
              />
            </div>
          </div>
        </div>
        {/* foo2 */}
        <div className="mt-20 grid grid-cols-2 items-center gap-">
          <div>
            <div className="relative max-w-6xl ml-10 h-169 w-125.25 overflow-hidden rounded-[49px] border border-emerald-500 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <Image
                src="/food2.png"
                alt="food"
                fill
                className="w-185.75 h-20 "
                priority
              />
            </div>
          </div>
          <div className="max-w-162.5">
            <h2 className="mb-10 text-[52px] font-bold leading-none text-black">
              Наш путь
            </h2>

            <p className="mb-10 max-w-152.5 text-[20px] leading-[1.65] text-black/80">
              С самого начала мы взяли на себя обязательство предлагать свежие
              продукты, свежие ингредиенты и новый взгляд на заботу о наших
              гостях, членах нашей команды и наших сообществах. Мы искренне
              верим, что нет ничего, что могло бы объединить людей или сделать
              мир лучше, чем тарелка лапши.
            </p>

            <p className="mb-12 max-w-152.5 text-[20px] leading-[1.65] text-black/80">
              Продолжая расти, мы реализуем ключевые инициативы во всей нашей
              компании, чтобы поддержать светлое будущее. В нашем отчете о
              влиянии рассматриваются некоторые из этих областей, такие как
              создание меню, наполненного свежими и захватывающими новыми
              вкусами; активация лучших в отрасли льгот для людей; и некоторые
              способы лучше заботиться о наших сообществах – и о нашей планете –
              которую мы называем домом.
            </p>
          </div>
        </div>
        <div className="py-16 ">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-16 text-center text-[52px] font-extrabold">
              Наша команда
            </h2>

            <div className="grid grid-cols-3 gap-y-20">
              {/* CARD 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-72.5 w-72.5 items-center justify-center rounded-full border border-black/40">
                  <div className="relative h-60 w-60 overflow-hidden rounded-full">
                    <Image
                      src="/chef.png"
                      alt="chef"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-[28px] font-extrabold">Александр Петро</h3>

                <p className="mt-2 text-[20px] text-black/60">главный повар</p>
              </div>
              {/* CARD 2 */}
              <div className="flex flex-col items-center text-center">
                <div className={newLocal}>
                  <div className="relative h-60 w-60 overflow-hidden rounded-full">
                    <Image
                      src="/chef.png"
                      alt="chef"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-[28px] font-extrabold">Александр Петро</h3>

                <p className="mt-2 text-[20px] text-black/60">
                  помощник повара
                </p>
              </div>
              {/* CARD 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-72.5 w-72.5 items-center justify-center rounded-full border border-black/40">
                  <div className="relative h-60 w-60 overflow-hidden rounded-full">
                    <Image
                      src="/chef.png"
                      alt="chef"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-[28px] font-extrabold">Александр Петро</h3>

                <p className="mt-2 text-[20px] text-black/60">бургер кинг</p>
              </div>
              {/* CARD 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-72.5 w-72.5 items-center justify-center rounded-full border border-black/40">
                  <div className="relative h-60 w-60 overflow-hidden rounded-full">
                    <Image
                      src="/chef.png"
                      alt="waiter"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-[28px] font-extrabold">Жулия Виллиам</h3>

                <p className="mt-2 text-[20px] text-black/60">официантка</p>
              </div>
              {/* CARD 5 */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-72.5 w-72.5 items-center justify-center rounded-full border border-black/40">
                  <div className="relative h-60 w-60 overflow-hidden rounded-full">
                    <Image
                      src="/chef.png"
                      alt="waiter"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-[28px] font-extrabold">Жулия Виллиам</h3>

                <p className="mt-2 text-[20px] text-black/60">официантка</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-72.5 w-72.5 items-center justify-center rounded-full border border-black/40">
                  <div className="relative h-60 w-60 overflow-hidden rounded-full">
                    <Image
                      src="/chef.png"
                      alt="waiter"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-[28px] font-extrabold">Жулия Виллиам</h3>

                <p className="mt-2 text-[20px] text-black/60">официантка</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

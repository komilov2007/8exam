'use client';

import BlyudaItem from '@/components/BlyudeItem';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Blyuda = () => {
  const cards = [
    {
      id: 1,
      image: '/potato.png',
      text: 'Chicken soup',
      name: 'Spicy with garlic',
      price: '$10.00',
    },
    {
      id: 2,
      image: '/potato.png',
      text: 'Chicken soup',
      name: 'Spicy with garlic',
      price: '$10.00',
    },
    {
      id: 3,
      image: '/potato.png',
      text: 'Chicken soup',
      name: 'Spicy with garlic',
      price: '$10.00',
    },
    {
      id: 4,
      image: '/potato.png',
      text: 'Chicken soup',
      name: 'Spicy with garlic',
      price: '$10.00',
    },
    {
      id: 5,
      image: '/potato.png',
      text: 'Chicken soup',
      name: 'Spicy with garlic',
      price: '$10.00',
    },
    {
      id: 6,
      image: '/potato.png',
      text: 'Chicken soup',
      name: 'Spicy with garlic',
      price: '$10.00',
    },
  ];

  return (
    <section className="py-16">
      <div className="relative mx-auto max-w-7xl">
        <h2 className="mb-40 text-center text-[48px] font-extrabold">
          Популярные блюда
        </h2>

        <Image
          src="/leaf4.png"
          alt="leaf"
          width={150}
          height={150}
          className="absolute -left-50 top-100 z-1 h-70 w-70 rotate-10"
        />

        <div className="relative px-12 -mt-20">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-8 overflow-visible">
              {cards.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-1/4 overflow-visible pl-8"
                >
                  <BlyudaItem
                    image={item.image}
                    text={item.text}
                    name={item.name}
                    price={item.price}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="-left-15 bg-white/35 z-50 h-14 w-14" />
            <CarouselNext className="-right-15 bg-white/35 z-50 h-14 w-14" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Blyuda;

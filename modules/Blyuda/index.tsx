'use client';

import BlyudeItem from '@/components/BlyudeItem';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useProducts } from '@/hooks/useProducts';

const Blyuda = () => {
  const { data, isLoading, isError } = useProducts();

  const products = Array.isArray(data?.data)
    ? data.data
    : Array.isArray(data)
      ? data
      : Array.isArray(data?.items)
        ? data.items
        : [];

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Xatolik yuz berdi</p>;
  }

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

        <div className="relative -mt-20 px-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-8 overflow-visible">
              {products.map((item: any) => (
                <CarouselItem
                  key={item.id}
                  className="basis-1/4 overflow-visible pl-8"
                >
                  <BlyudeItem
                    id={item.id}
                    image={item.image || item.images?.[0] || ''}
                    text={item.title || item.name || 'No title'}
                    name={item.description || 'No description'}
                    price={item.price || 0}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="-left-15 z-50 h-14 w-14 bg-white/35" />
            <CarouselNext className="-right-15 z-50 h-14 w-14 bg-white/35" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Blyuda;

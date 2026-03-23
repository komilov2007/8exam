'use client';

import Image from 'next/image';
import { useGalleries } from '@/hooks/useGalleries';

const NewsPageGallery = () => {
  const { data, isLoading, isError } = useGalleries();

  const galleries = data?.data || data || [];

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError) return <p className="text-center">Gallery yuklashda xatolik</p>;

  return (
    <div className="mx-auto mb-10 max-w-6xl">
      <h2 className="mb-10 text-center text-[48px] font-extrabold">Галерея</h2>

      <div className="grid grid-cols-4 gap-8">
        {galleries.slice(0, 8).map((item: any) => {
          const imageSrc = item?.image
            ? `https://anorkhulov.uz/${item.image}`
            : '';

          return (
            <div key={item.id} className="w-full">
              <Image
                src={imageSrc}
                alt="gallery"
                width={270}
                height={300}
                className="h-15 w-full rounded-md object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsPageGallery;

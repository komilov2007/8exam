'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getLikedProductsFull, toggleLikeProduct, addToCart } from '@/services';
import toast from 'react-hot-toast';
import { BasketWhite, Like } from '@/components/svgindex';

type ProductType = {
  id: number;
  title?: string;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
};

const LikePage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadLikedProducts = async () => {
    try {
      setLoading(true);
      setError('');

      const data = await getLikedProductsFull();
      setProducts(data);
    } catch (err: any) {
      setError('Like mahsulotlarni yuklashda xatolik ❌');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLikedProducts();

    const handleLikesUpdate = () => {
      loadLikedProducts();
    };

    window.addEventListener('likes-updated', handleLikesUpdate);

    return () => {
      window.removeEventListener('likes-updated', handleLikesUpdate);
    };
  }, []);

  const handleRemoveLike = (productId: number) => {
    toggleLikeProduct(productId);
    toast.success('Like olib tashlandi');
    loadLikedProducts();
  };

  const handleAddToCart = async (productId: number) => {
    const res = await addToCart(productId, 1);

    if (res.ok) {
      toast.success('Savatchaga qo‘shildi 🛒');
      window.dispatchEvent(new Event('cart-updated'));
    } else {
      toast.error(res.message);
    }
  };

  if (loading) {
    return (
      <section className="py-20 text-center text-xl">Yuklanmoqda...</section>
    );
  }

  if (error) {
    return (
      <section className="py-20 text-center text-xl text-red-500">
        {error}
      </section>
    );
  }

  if (!products.length) {
    return (
      <section className="py-24 text-center">
        <h2 className="mb-4 text-3xl font-bold">Like mahsulotlar yo‘q ❤️</h2>
        <p className="text-gray-500">
          Hali hech qanday mahsulot like qilinmagan
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="mb-16 text-center text-4xl font-bold">
        Sevimli mahsulotlar
      </h1>

      <div className="grid grid-cols-4 gap-10">
        {products.map((item) => {
          let imageSrc = '';

          if (typeof item.image === 'string') {
            const trimmedImage = item.image.trim();

            if (trimmedImage.startsWith('http')) {
              imageSrc = trimmedImage;
            } else if (trimmedImage.startsWith('/')) {
              `imageSrc = https://anorkhulov.uz${trimmedImage};`;
            } else if (trimmedImage) {
              ` imageSrc = https://anorkhulov.uz/${trimmedImage};`;
            }
          }

          return (
            <div
              key={item.id}
              className="relative h-110 w-full px-5 pb-5 pt-14"
            >
              <div className="absolute z-999 top-0 h-49.25 w-65.75">
                <div className="relative -ml-1 h-63.25 w-60.75 border-2 border-green-500">
                  {imageSrc && (
                    <Image
                      src={imageSrc}
                      alt="img"
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-contain"
                    />
                  )}
                </div>
              </div>

              <div className="-ml-5 -mt-20 h-77.5 w-68 rounded-[38px] bg-white/30 pl-5 pr-5 backdrop-blur-md">
                <p className="mt-32 mb-5 flex items-center justify-between pt-40 text-[24px] font-bold text-black">
                  <span className="block max-w-47.5 overflow-hidden text-ellipsis whitespace-nowrap">
                    {item.title || item.name || 'No title'}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveLike(Number(item.id))}
                  >
                    <Like active />
                  </button>
                </p>

                <span className="block max-w-50 overflow-hidden text-ellipsis whitespace-nowrap text-[15px]">
                  {item.description || 'No description'}
                </span>

                <div className="mt-3 flex items-end justify-between">
                  <span className="text-[24px] font-bold">
                    ${item.price || 0}
                  </span>

                  <button
                    onClick={() => handleAddToCart(Number(item.id))}
                    className="flex h-10 w-10 items-center justify-center rounded bg-black text-white"
                  >
                    <BasketWhite />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LikePage;

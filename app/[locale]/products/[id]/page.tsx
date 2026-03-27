'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { MenuRight, Star, StarOutline } from '@/components/svgindex';
import HeadBtm from '@/components/HeadBtm';
import { getOneProduct, addToCart } from '@/services';
import toast from 'react-hot-toast';

type ProductType = {
  id: number;
  title?: string;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  images?: string[];
};

const Page = () => {
  const params = useParams();
  const id = params?.id as string;

  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  const getImageSrc = (image?: string) => {
    if (!image) return '';

    const trimmedImage = image.trim();

    if (!trimmedImage) return '';

    if (trimmedImage.startsWith('http')) {
      return trimmedImage;
    }

    if (trimmedImage.startsWith('/')) {
      return `https://anorkhulov.uz${trimmedImage}`;
    }

    return `https://anorkhulov.uz/${trimmedImage}`;
  };

  const loadProduct = async () => {
    try {
      setLoading(true);

      const res = await getOneProduct(id);
      const oneProduct = res?.data || res;

      setProduct(oneProduct);
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || 'Mahsulotni yuklashda xatolik ❌'
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      loadProduct();
    }
  }, [id]);

  const handleAddToCart = async () => {
    if (!product?.id) return;

    const res = await addToCart(product.id, count);

    if (res.ok) {
      toast.success('Savatchaga qo‘shildi');
    } else {
      toast.error(res.message);
    }
  };

  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-20 text-center text-xl">
        Yuklanmoqda...
      </section>
    );
  }

  if (!product) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-20 text-center text-xl">
        Mahsulot topilmadi
      </section>
    );
  }

  const imageSrc = getImageSrc(product.image || product.images?.[0]);

  return (
    <div className="relative mx-auto max-w-7xl rounded-[34px] bg-white/22 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-[10px]">
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

        <Link
          href="/menu"
          className="ml-2 flex items-center justify-center gap-2 text-[#626464]"
        >
          Меню
          <span className="mt-1">
            <MenuRight />
          </span>
        </Link>

        <span className="ml-2 text-black">
          {product.title || product.name || 'Product'}
        </span>
      </div>

      <section className="px-10 pb-20 pt-10">
        <h1 className="mb-10 text-center text-[64px] font-extrabold text-black">
          {product.title || product.name || 'Product'}
        </h1>

        <div className="grid grid-cols-2 items-center gap-10">
          <div className="flex items-center justify-center">
            <div className="relative h-130 w-full max-w-130">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={product.title || product.name || 'product'}
                  fill
                  sizes="520px"
                  className="object-contain"
                />
              ) : null}
            </div>
          </div>

          <div className="max-w-140">
            <h2 className="mb-4 text-[56px] font-extrabold leading-none text-black">
              {product.title || product.name || 'No title'}
            </h2>
            <div className="mb-8 flex items-center gap-5">
              <span className="text-[32px] font-bold text-black">
                ${product.price || 0}
              </span>

              <div className="flex items-center gap-2">
                <Star />
                <Star />
                <Star />
                <Star />
                <StarOutline />
                <span className="ml-2 text-[24px] text-black/70">4,0</span>
                <span className="text-[24px] text-black/40">
                  (Смотреть отзывы)
                </span>
              </div>
            </div>

            <h3 className="mb-5 text-[44px] font-extrabold text-black">
              Описание:
            </h3>

            <p className="mb-12 max-w-155 text-[28px] leading-normal text-black/70">
              {product.description || 'No description'}
            </p>

            <div className="flex items-center gap-8">
              <div className="flex h-20 w-60 items-center justify-between rounded-[18px] bg-white/70 px-8">
                <button
                  onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}
                  className="text-[40px] text-black"
                >
                  -
                </button>

                <span className="text-[36px] font-semibold text-black">
                  {count}
                </span>

                <button
                  onClick={() => setCount((prev) => prev + 1)}
                  className="text-[40px] text-black"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex h-20 w-75 items-center justify-center rounded-[18px] bg-black text-[28px] font-medium text-white"
              >
                В корзину
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;

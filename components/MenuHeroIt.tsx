'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { BasketWhite, Like, LikeFilled, LikeOutline } from './svgindex';
import { addToCart, isProductLiked, toggleLikeProduct } from '@/services';
import toast from 'react-hot-toast';

type Props = {
  id: number | string;
  image?: string;
  text: string;
  name: string;
  price: string | number;
};

const MenuHeroItem = ({ id, image, text, name, price }: Props) => {
  const productId = Number(id);
  const [liked, setLiked] = useState(false);

  let imageSrc = '';

  if (typeof image === 'string') {
    const trimmedImage = image.trim();

    if (trimmedImage.startsWith('http')) {
      imageSrc = trimmedImage;
    } else if (trimmedImage.startsWith('/')) {
      imageSrc = `https://anorkhulov.uz${trimmedImage}`;
    } else if (trimmedImage) {
      imageSrc = `https://anorkhulov.uz/${trimmedImage}`;
    }
  }

  useEffect(() => {
    setLiked(isProductLiked(productId));
  }, [productId]);

  const handleAddToCart = async () => {
    const res = await addToCart(productId, 1);

    if (res.ok) {
      toast.success('Savatchaga qo‘shildi 🛒');
      window.dispatchEvent(new Event('cart-updated'));
    } else {
      toast.error(res.message);
    }
  };

  const handleToggleLike = () => {
    toggleLikeProduct(productId);
    setLiked(isProductLiked(productId));
    toast.success(liked ? 'Like olib tashlandi' : 'Like qilindi ❤️');
  };

  return (
    <div className="relative mb-20 w-65.75 mt-20 rounded-[38px] bg-white/30 px-5 pb-5 pt-14 shadow-md backdrop-blur-md">
      <div className="absolute -top-17 left-32 h-49.25 w-65.75 -translate-x-1/2">
        <div className="relative ml-3 h-60 w-60.75 overflow-hidden border-2 border-green-500">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={name}
              fill
              sizes="(max-width:768px) 100vw, 33vw"
              className="object-contain"
            />
          )}
        </div>
      </div>

      <div>
        <p className="mt-32 mb-5 flex items-center justify-between text-[24px] leading-5 font-bold text-black">
          <span className="block max-w-47.5 overflow-hidden text-ellipsis whitespace-nowrap">
            {text}
          </span>

          <button type="button" onClick={handleToggleLike}>
            {liked ? <LikeFilled /> : <LikeOutline />}
          </button>
        </p>
      </div>

      <div className="flex items-center gap-2">
        <span className="block max-w-50 overflow-hidden text-ellipsis whitespace-nowrap text-[15px] font-light">
          {name}
        </span>
      </div>

      <div className="mt-1 flex items-end justify-between">
        <span className="text-[24px] font-bold">${price}</span>

        <button
          onClick={handleAddToCart}
          className="flex h-10 w-10 items-center justify-center rounded-[5px] bg-black text-white"
        >
          <BasketWhite />
        </button>
      </div>
    </div>
  );
};

export default MenuHeroItem;

// 'use client';

// import Image from 'next/image';
// import { BasketWhite, Like } from './svgindex';
// import { addToCart } from '@/services';
// import toast from 'react-hot-toast';

// type Props = {
//   id: number | string;
//   image?: string;
//   text: string;
//   name: string;
//   price: string | number;
// };

// const BlyudeItem = ({ id, image, text, name, price }: Props) => {
//   let imageSrc = '';

//   if (typeof image === 'string') {
//     const trimmedImage = image.trim();

//     if (trimmedImage.startsWith('http')) {
//       imageSrc = trimmedImage;
//     } else if (trimmedImage.startsWith('/')) {
//       imageSrc = `https://anorkhulov.uz${trimmedImage}`;
//     } else if (trimmedImage) {
//       imageSrc = `https://anorkhulov.uz/${trimmedImage}`;
//     }
//   }

//   const handleAddToCart = async () => {
//     console.log('PRODUCT ID:', id);

//     const res = await addToCart(Number(id), 1);

//     if (res.ok) {
//       toast.success('Savatchaga qo‘shildi 🛒');
//       window.dispatchEvent(new Event('cart-updated'));
//     } else {
//       toast.error(res.message);
//     }
//   };

//   return (
//     <div className="relative h-110 w-full px-5 pb-5 pt-14">
//       <div className="absolute z-999 top-0 h-49.25 w-65.75">
//         <div className="relative  -ml-1 h-63.25 w-60.75 border-2 border-green-500">
//           {imageSrc && (
//             <Image
//               src={imageSrc}
//               alt={name}
//               fill
//               sizes="(max-width:768px) 100vw, 33vw"
//               className="object-contain"
//             />
//           )}
//         </div>
//       </div>

//       <div className="-ml-5 -mt-20 h-77.5 pb-10 w-68 rounded-[38px] bg-white/30 pl-5 pr-5 backdrop-blur-md">
//         <p className="mt-32 mb-5 pt-40 flex items-center justify-between text-[24px] font-bold text-black">
//           <span className="block max-w-45 overflow-hidden whitespace-nowrap text-ellipsis">
//             {text}
//           </span>

//           <span className="shrink-0">
//             <Like />
//           </span>
//         </p>

//         <span className="text-[15px]">{name}</span>

//         <div className="mt-3 flex items-end justify-between">
//           <span className="text-[24px] font-bold">${price}</span>

//           <button
//             onClick={handleAddToCart}
//             className="flex h-10 w-10 items-center justify-center rounded bg-black text-white"
//           >
//             <BasketWhite />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlyudeItem;
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { BasketWhite, Like, LikeFilled, LikeOutline } from './svgindex';
import { addToCart, isProductLiked, toggleLikeProduct } from '@/services';
import toast from 'react-hot-toast';
import Link from 'next/link';

type Props = {
  id: number | string;
  image?: string;
  text: string;
  name: string;
  price: string | number;
};

const BlyudeItem = ({ id, image, text, name, price }: Props) => {
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

  const handleAddToCart = () => {
    if (typeof window === 'undefined') return;

    const basket = localStorage.getItem('basketProducts');
    const parsedBasket = basket ? JSON.parse(basket) : [];

    const product = {
      id: Number(id),
      title: text,
      name: text,
      description: name,
      price: Number(price),
      image: image || '',
      quantity: 1,
    };

    const existingProduct = parsedBasket.find(
      (item: any) => item.id === Number(id)
    );

    let updatedBasket = [];

    if (existingProduct) {
      updatedBasket = parsedBasket.map((item: any) =>
        item.id === Number(id) ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedBasket = [...parsedBasket, product];
    }

    localStorage.setItem('basketProducts', JSON.stringify(updatedBasket));
    window.dispatchEvent(new Event('basket-updated'));
    toast.success('Savatchaga qo‘shildi');
  };

  const handleToggleLike = () => {
    toggleLikeProduct(productId);
    setLiked(isProductLiked(productId));
    toast.success(liked ? 'Like olib tashlandi' : 'Likega qoshidi');
  };

  return (
    <div className="relative mt-20 mb-20 w-65.75 rounded-[38px] bg-white/30 px-5 pb-5 pt-14 shadow-md backdrop-blur-md">
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
      <Link href={`/products/${id}`}>
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
        </div>
      </Link>
      <button
        onClick={handleAddToCart}
        className="flex ml-45 absolute top-62 h-10 w-10 items-center justify-center rounded-[5px] bg-black text-white"
      >
        <BasketWhite />
      </button>
    </div>
  );
};

export default BlyudeItem;

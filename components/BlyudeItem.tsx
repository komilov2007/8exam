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
    toast.success(liked ? 'Like olib tashlandi' : 'Likega qoshidi');
  };

  return (
    <div className="relative h-110 w-full px-5 pb-5 pt-14">
      <div className="absolute top-0 h-49.25 w-65.75">
        <div className="relative -ml-1 h-63.25 w-60.75 border-2 border-green-500">
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

      <div className="-ml-5 -mt-20 h-77.5 w-68 rounded-[38px] bg-white/30 pl-5 pr-5">
        <p className="mt-32 mb-5 flex items-center justify-between pt-40 text-[24px] font-bold">
          <span className="block max-w-47.5 overflow-hidden text-ellipsis whitespace-nowrap">
            {text}
          </span>

          <button type="button" onClick={handleToggleLike}>
            {liked ? <LikeFilled /> : <LikeOutline />}
          </button>
        </p>

        <span className="block max-w-50 overflow-hidden text-ellipsis whitespace-nowrap text-[15px]">
          {name}
        </span>

        <div className="mt-3 flex items-end justify-between">
          <span className="text-[24px] font-bold">${price}</span>

          <button
            onClick={handleAddToCart}
            className="flex h-10 w-10 items-center justify-center rounded bg-black text-white"
          >
            <BasketWhite />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlyudeItem;

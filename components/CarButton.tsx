'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useCartCount } from '@/hooks/useCartCount';
import { BasketWhite } from './svgindex';

const CartButton = () => {
  const locale = useLocale();
  const { data, refetch } = useCartCount();

  const cartData = data?.data || data || [];
  const count =
    cartData?.items?.length ||
    cartData?.data?.items?.length ||
    cartData?.length ||
    cartData?.count ||
    0;

  useEffect(() => {
    const handleCartUpdate = () => {
      refetch();
    };

    window.addEventListener('cart-updated', handleCartUpdate);

    return () => {
      window.removeEventListener('cart-updated', handleCartUpdate);
    };
  }, [refetch]);

  return (
    <Link
      href={`/${locale}/cart`}
      className="relative flex h-10 w-10 items-center justify-center rounded-[5px] bg-black text-white"
    >
      <BasketWhite />

      {count > 0 && (
        <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] text-white">
          {count}
        </span>
      )}
    </Link>
  );
};

export default CartButton;

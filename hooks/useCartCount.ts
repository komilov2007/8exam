'use client';

import { useQuery } from '@tanstack/react-query';
import { getCurrentCart } from '@/services';

export const useCartCount = () => {
  return useQuery({
    queryKey: ['cart-current'],
    queryFn: getCurrentCart,
    refetchOnWindowFocus: false,
  });
};

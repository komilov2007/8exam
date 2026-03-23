'use client';

import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/services';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
};

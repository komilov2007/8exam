'use client';

import { useQuery } from '@tanstack/react-query';
import { getGalleries } from '@/services';

export const useGalleries = () => {
  return useQuery({
    queryKey: ['galleries'],
    queryFn: getGalleries,
  });
};

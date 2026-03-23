'use client';

import { useQuery } from '@tanstack/react-query';
import { getNews } from '@/services';

export const useNews = () => {
  return useQuery({
    queryKey: ['news'],
    queryFn: getNews,
  });
};

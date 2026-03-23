'use client';

import { useMutation } from '@tanstack/react-query';
import { signInUser } from '@/services';

export const useSignIn = () => {
  return useMutation({
    mutationFn: signInUser,
  });
};

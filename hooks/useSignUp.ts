'use client';

import { useMutation } from '@tanstack/react-query';
import { signUpUser } from '@/services';

export const useSignUp = () => {
  return useMutation({
    mutationFn: signUpUser,
  });
};

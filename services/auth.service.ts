import { api } from '@/lib/axios';

export const signInUser = async (data: {
  username: string;
  password: string;
}) => {
  const res = await api.post('/api/auth/signin', data);
  return res.data;
};

export const signUpUser = async (data: {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}) => {
  const res = await api.post('/api/auth/signup', data);
  return res.data;
};

'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { Qoshiq } from './svgindex';
import { useSignUp } from '@/hooks/useSignUp';

type RegisterModalProps = {
  onClose: () => void;
  onOpenLogin: () => void;
};

const RegisterModal = ({ onClose, onOpenLogin }: RegisterModalProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpMutation = useSignUp();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signUpMutation.mutate(
      {
        firstName,
        lastName,
        username,
        email,
        password,
      },
      {
        onSuccess: () => {
          toast.success('Register muvaffaqiyatli');
          onOpenLogin();
        },
        onError: (error: any) => {
          toast.error(error?.response?.data?.message || 'Register xato');
        },
      }
    );
  };

  return (
    <section
      className="fixed inset-0 z-999 flex items-center justify-center bg-black/40 px-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 backdrop-blur-md" />

      <div
        className="relative z-10 flex min-h-162.5 w-full max-w-107.5 flex-col justify-center rounded-[28px] bg-white/65 px-10 py-10 shadow-xl backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 text-2xl font-bold text-black"
        >
          ×
        </button>

        {/* icon */}
        <div className="absolute left-1/4 top-0 flex h-19.5 w-19.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white/80 bg-black p-10 text-white shadow-lg">
          <span>
            <Qoshiq />
          </span>
        </div>

        <h2 className="mt-6 text-center text-[40px] font-extrabold leading-tight text-black">
          Регистрация
        </h2>

        <form onSubmit={handleSubmit} className="mt-10 flex flex-1 flex-col">
          <div className="space-y-6">
            <div className="pb-2">
              <input
                type="text"
                placeholder="Ваше имя"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border-b border-black/30 bg-transparent pb-2 outline-none"
              />
            </div>

            <div className="pb-2">
              <input
                type="text"
                placeholder="Ваша фамилия"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border-b border-black/30 bg-transparent pb-2 outline-none"
              />
            </div>

            <div className="pb-2">
              <input
                type="text"
                placeholder="Имя пользователя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border-b border-black/30 bg-transparent pb-2 outline-none"
              />
            </div>

            <div className="pb-2">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-black/30 bg-transparent pb-2 outline-none"
              />
            </div>

            <div className="border-b border-black/35 pb-2">
              <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-[14px] text-black placeholder:text-black/45 outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={signUpMutation.isPending}
            className="mx-auto mt-8 rounded-2xl bg-black px-8 py-4 text-[14px] font-medium text-white transition hover:opacity-90 disabled:opacity-50"
          >
            {signUpMutation.isPending ? 'Loading...' : 'Регистрация'}
          </button>

          <button
            type="button"
            onClick={onOpenLogin}
            className="mx-auto mt-4 text-[11px] text-[#2d2a85] hover:underline"
          >
            Уже есть аккаунт?
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterModal;

'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { Qoshiq } from './svgindex';
import { useSignIn } from '@/hooks/useSignIn';

type AuthModalProps = {
  onClose: () => void;
  onOpenRegister: () => void;
};

const AuthModal = ({ onClose, onOpenRegister }: AuthModalProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signInMutation = useSignIn();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      username: username.trim(),
      password: password.trim(),
    };

    console.log('SIGN IN BODY:', formData);

    signInMutation.mutate(formData, {
      onSuccess: (data) => {
        const token = data?.data?.accessToken;
        const user = data?.data?.user;

        if (token) {
          document.cookie = `token=${token}; path=/; max-age=604800`;
        }

        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }

        toast.success('Muvaffaqiyatli kirdingiz');
        onClose();
      },
    });
  };
  return (
    <section
      className="fixed inset-0 z-999 flex items-center justify-center bg-black/40 px-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 backdrop-blur-md" />

      <div
        className="relative z-10 flex aspect-square w-full max-w-107.5 flex-col justify-center rounded-[28px] bg-white/65 px-10 py-10 shadow-xl backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 text-2xl font-bold text-black"
        >
          ×
        </button>

        <div className="absolute left-1/4 top-0 flex h-19.5 w-19.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white/80 bg-black p-10 text-white shadow-lg">
          <span>
            <Qoshiq />
          </span>
        </div>

        <h2 className="mt-6 text-center text-[40px] font-extrabold leading-tight text-black">
          Вход в аккаунт
        </h2>

        <form onSubmit={handleSubmit} className="mt-10 flex flex-1 flex-col">
          <div className="space-y-8">
            <div className="pb-2">
              <input
                type="text"
                placeholder="Ваше имя пользователя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-87.5 border-b border-black/30 bg-transparent pb-2 outline-none"
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
            type="button"
            className="mt-3 self-start text-[11px] text-black hover:underline"
          >
            Забыли пароль?
          </button>

          <button
            type="submit"
            disabled={signInMutation.isPending}
            className="mx-auto mt-8 rounded-2xl bg-black px-8 py-4 text-[14px] font-medium text-white transition hover:opacity-90 disabled:opacity-50"
          >
            {signInMutation.isPending ? 'Loading...' : 'Вход в аккаунт'}
          </button>

          <button
            type="button"
            onClick={onOpenRegister}
            className="mx-auto mt-4 text-[11px] text-[#2d2a85] hover:underline"
          >
            Еще нет учетной записи?
          </button>
        </form>
      </div>
    </section>
  );
};

export default AuthModal;

'use client';

import { useState, type FormEvent } from 'react';
import HeadBtm from '@/components/HeadBtm';
import OrderContactSection from '@/components/OrderContactSection';
import { MenuRight } from '@/components/svgindex';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { sendContactMessage } from '@/services';

const Page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      await sendContactMessage({
        name,
        email,
        phone,
        message,
      });

      toast.success('Xabar yuborildi');

      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || 'Xabar yuborishda xatolik '
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative mx-auto max-w-7xl rounded-[34px] bg-white/22 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-[10px]">
      <HeadBtm />

      <div className="ml-10 mt-25 flex">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 text-[#626464]"
        >
          Главная
          <span className="mt-1">
            <MenuRight />
          </span>
        </Link>

        <Link href="/contacts">
          <span className="ml-1 text-black">Контакты</span>
        </Link>
      </div>

      <div>
        <div>
          <OrderContactSection />
        </div>

        <div className="mx-auto mt-20 mb-20 max-w-4xl">
          <h2 className="text-center text-[28px] font-bold leading-none text-black">
            Написать нам
          </h2>

          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col items-center justify-center gap-5"
          >
            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-10 w-full border pl-10 outline-none"
              required
            />

            <input
              type="email"
              placeholder="Ваш E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-10 w-full border pl-10 outline-none"
              required
            />

            <input
              type="text"
              placeholder="Ваш номер телефона"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-10 w-full border pl-10 outline-none"
              required
            />

            <input
              placeholder="Ваше сообщение"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-10 w-full border pl-10 outline-none"
              required
            />

            <div className="mt-5 mb-10 flex w-full justify-end">
              <button
                type="submit"
                disabled={loading}
                className="h-10 w-42.25 rounded-[9px] bg-black text-[14px] font-medium text-white disabled:opacity-50"
              >
                {loading ? 'Отправка...' : 'Отправить'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;

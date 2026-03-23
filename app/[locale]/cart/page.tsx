'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { checkoutCart, getCurrentCart } from '@/services';
import toast from 'react-hot-toast';

type ProductType = {
  id: number;
  title?: string;
  name?: string;
  price?: number;
  image?: string;
};

type CartItemType = {
  id: number;
  quantity: number;
  product?: ProductType;
};

const CartPage = () => {
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [error, setError] = useState('');

  const loadCart = async () => {
    try {
      setLoading(true);
      setError('');

      const res = await getCurrentCart();
      console.log('CART RESPONSE:', res);

      const items = Array.isArray(res?.items)
        ? res.items
        : Array.isArray(res?.data?.items)
          ? res.data.items
          : Array.isArray(res?.data)
            ? res.data
            : Array.isArray(res)
              ? res
              : [];

      setCart(items);
    } catch (err: any) {
      console.log('CART ERROR:', err?.response?.data || err);

      setError(
        err?.response?.data?.message ||
          'Savatchani yuklashda xatolik yuz berdi ❌'
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const handleCheckout = async () => {
    try {
      setCheckoutLoading(true);

      await checkoutCart();
      toast.success('Buyurtma muvaffaqiyatli yuborildi ✅');

      setCart([]);
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Checkoutda xatolik ❌');
    } finally {
      setCheckoutLoading(false);
    }
  };

  const totalPrice = cart.reduce((acc, item) => {
    const price = item.product?.price || 0;
    return acc + price * item.quantity;
  }, 0);

  if (loading) {
    return (
      <section className="py-20 text-center text-xl">Yuklanmoqda...</section>
    );
  }

  if (error) {
    return (
      <section className="py-20 text-center text-xl text-red-500">
        {error}
      </section>
    );
  }

  if (!cart.length) {
    return (
      <section className="py-24 text-center">
        <h2 className="mb-4 text-3xl font-bold">Savatcha bo‘sh 🛒</h2>
        <p className="text-gray-500">Hali hech qanday mahsulot qo‘shilmagan</p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="mb-10 text-center text-4xl font-bold">Savatcha</h1>

      <div className="space-y-6">
        {cart.map((item) => {
          const imagePath = item.product?.image || '';

          const imageSrc = imagePath
            ? imagePath.startsWith('http')
              ? imagePath
              : imagePath.startsWith('/')
                ? `https://anorkhulov.uz${imagePath}`
                : `https://anorkhulov.uz/${imagePath}`
            : '';

          return (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl border p-4 shadow-sm"
            >
              <div className="flex items-center gap-5">
                <div className="relative h-24 w-24">
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={
                        item.product?.title || item.product?.name || 'product'
                      }
                      fill
                      sizes="96px"
                      className="rounded-lg object-cover"
                    />
                  ) : null}
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    {item.product?.title || item.product?.name || 'No title'}
                  </h3>

                  <p className="text-gray-500">${item.product?.price || 0}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="rounded-lg border px-4 py-2">
                  {item.quantity}
                </div>

                <span className="text-lg font-semibold">
                  ${(item.product?.price || 0) * item.quantity}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-end">
        <div className="w-80 rounded-xl border p-6">
          <h3 className="mb-4 text-xl font-bold">Umumiy summa</h3>

          <div className="flex justify-between text-lg">
            <span>Total:</span>
            <span className="font-bold">${totalPrice}</span>
          </div>

          <button
            onClick={handleCheckout}
            disabled={checkoutLoading}
            className="mt-6 w-full rounded-lg bg-black py-3 text-white transition hover:bg-gray-800 disabled:opacity-50"
          >
            {checkoutLoading ? 'Yuborilmoqda...' : 'Buyurtma berish'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;

'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';

type BasketItemType = {
  id: number;
  title?: string;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  quantity: number;
};

export default function BasketPage() {
  const [items, setItems] = useState<BasketItemType[]>([]);
  const [loading, setLoading] = useState(true);

  const getImageSrc = (image?: string) => {
    if (!image) return '';

    if (image.startsWith('http')) return image;

    if (image.startsWith('/')) {
      return `https://anorkhulov.uz${image}`;
    }

    return `https://anorkhulov.uz/${image}`;
  };

  const loadBasket = () => {
    const data = localStorage.getItem('basketProducts');
    setItems(data ? JSON.parse(data) : []);
    setLoading(false);
  };

  useEffect(() => {
    loadBasket();

    window.addEventListener('basket-updated', loadBasket);

    return () => window.removeEventListener('basket-updated', loadBasket);
  }, []);

  const totalPrice = useMemo(() => {
    return items.reduce(
      (acc, item) => acc + (item.price || 0) * item.quantity,
      0
    );
  }, [items]);

  const increase = (id: number) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );

    setItems(updated);
    localStorage.setItem('basketProducts', JSON.stringify(updated));
  };

  const decrease = (id: number) => {
    const updated = items.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
          }
        : item
    );

    setItems(updated);
    localStorage.setItem('basketProducts', JSON.stringify(updated));
  };

  const removeItem = (id: number) => {
    const updated = items.filter((item) => item.id !== id);

    setItems(updated);
    localStorage.setItem('basketProducts', JSON.stringify(updated));

    toast.success('Mahsulot o‘chirildi');
  };

  const checkout = () => {
    localStorage.removeItem('basketProducts');
    setItems([]);
    toast.success('Buyurtma qabul qilindi ✅');
  };

  if (loading) {
    return (
      <section className="max-w-6xl mx-auto py-20 text-center text-xl">
        Yuklanmoqda.................................................
      </section>
    );
  }

  if (!items.length) {
    return (
      <section className="max-w-6xl mx-auto py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Savatcha bo‘sh </h1>
        <p className="text-gray-500">Hali mahsulot qo‘shilmagan</p>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <h1 className="text-4xl font-bold text-center mb-10">Savatcha</h1>

      <div className="grid grid-cols-12 gap-8">
        {/* LEFT */}
        <div className="col-span-8 space-y-6">
          {items.map((item) => {
            const imageSrc = getImageSrc(item.image);

            return (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white shadow rounded-3xl p-5"
              >
                <div className="flex items-center gap-5">
                  <div className="relative w-28 h-28 rounded-2xl overflow-hidden border">
                    {imageSrc && (
                      <Image
                        src={imageSrc}
                        alt={item.title || 'product'}
                        fill
                        className="object-contain"
                      />
                    )}
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">
                      {item.title || item.name || 'No title'}
                    </h2>

                    <p className="text-gray-500 text-sm mb-3">
                      {item.description || 'No description'}
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decrease(item.id)}
                        className="w-8 h-8 bg-black text-white rounded-[10px]"
                      >
                        -
                      </button>

                      <span className="font-semibold">{item.quantity}</span>

                      <button
                        onClick={() => increase(item.id)}
                        className="w-8 h-8 bg-black text-white rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-gray-400 text-sm">Subtotal</p>

                  <p className="text-2xl font-bold">
                    ${(item.price || 0) * item.quantity}
                  </p>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="mt-3 px-4 py-2 bg-red-500 text-white rounded"
                  >
                    O‘chirish
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT */}
        <div className="col-span-4 ">
          <div className="bg-white shadow rounded-3xl p-6 sticky top-6">
            <h2 className="text-2xl font-bold mb-6">Buyurtma xulosasi</h2>

            <div className="flex justify-between mb-4 text-gray-600">
              <span>Mahsulotlar</span>
              <span>{items.length}</span>
            </div>

            <div className="flex justify-between text-lg font-bold mb-6">
              <span>Jami</span>
              <span>${totalPrice}</span>
            </div>

            <button
              onClick={checkout}
              className="w-full bg-black text-white py-3 rounded-xl"
            >
              Buyurtma berish
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

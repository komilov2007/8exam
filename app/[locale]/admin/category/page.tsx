'use client';

import { useEffect, useState } from 'react';
import { getAdminCategories } from '@/services';

export default function CategoryPage() {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      const res = await getAdminCategories();
      const data = Array.isArray(res?.data)
        ? res.data
        : Array.isArray(res)
          ? res
          : [];
      setCategories(data);
    };

    loadCategories();
  }, []);

  return (
    <section>
      <h1 className="mb-8 text-4xl font-extrabold">Category</h1>

      <div className="grid grid-cols-4 gap-6">
        {categories.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl bg-transperent h-100 p-6 shadow"
          >
            <h2 className="text-2xl font-bold">{item.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

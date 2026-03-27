'use client';

import { useEffect, useState, type FormEvent } from 'react';
import {
  createAdminProduct,
  deleteAdminProduct,
  getAdminProducts,
  getCategories,
} from '@/services';
import toast from 'react-hot-toast';

export default function MenuPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const loadProducts = async () => {
    try {
      const res = await getAdminProducts();

      const data = Array.isArray(res?.data)
        ? res.data
        : Array.isArray(res)
          ? res
          : [];

      setProducts(data);
    } catch {
      toast.error('Productlarni yuklashda xatolik');
    }
  };

  const loadCategories = async () => {
    try {
      const res = await getCategories();

      const data = Array.isArray(res?.data)
        ? res.data
        : Array.isArray(res)
          ? res
          : [];

      setCategories(data);
    } catch {
      toast.error('Categorylarni yuklashda xatolik');
    }
  };

  useEffect(() => {
    loadProducts();
    loadCategories();
  }, []);

  const handleCreate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createAdminProduct({
        name,
        price: Number(price),
        description,
        categoryId: categoryId ? Number(categoryId) : undefined,
        image,
      });

      toast.success('Product yaratildi ');

      setName('');
      setPrice('');
      setDescription('');
      setCategoryId('');
      setImage(null);

      const fileInput = document.getElementById(
        'product-image'
      ) as HTMLInputElement | null;

      if (fileInput) {
        fileInput.value = '';
      }

      await loadProducts();
    } catch (error: any) {
      console.log('CREATE ERROR:', error?.response?.data || error);

      toast.error(error?.response?.data?.message || 'Create qilishda xatolik ');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteAdminProduct(id);
      toast.success('Product o‘chirildi');
      await loadProducts();
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || 'Delete qilishda xatolik ❌'
      );
    }
  };

  return (
    <section>
      <h1 className="mb-8 text-4xl font-extrabold">Menu</h1>

      <form
        onSubmit={handleCreate}
        autoComplete="off"
        className="mb-8 grid grid-cols-2 gap-4 rounded-3xl bg-white/30 p-6 shadow backdrop-blur-md"
      >
        <input
          type="text"
          placeholder="Name"
          className="rounded-xl border px-4 py-3 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Price"
          className="rounded-xl border px-4 py-3 outline-none"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Description"
          className="rounded-xl border px-4 py-3 outline-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          className="rounded-xl border px-4 py-3 outline-none"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">Category tanlang</option>
          {categories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name || item.title}
            </option>
          ))}
        </select>
        <input
          id="product-image"
          type="file"
          accept="image/*"
          className="col-span-2 rounded-xl border px-4 py-3 outline-none"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />

        <button
          disabled={loading}
          className="col-span-2 rounded-xl bg-black py-3 text-white disabled:opacity-50"
        >
          {loading ? 'Creating...' : 'Create Product'}
        </button>
      </form>

      <div className="rounded-3xl bg-transparent p-6 shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-center">
              <th className="py-3">ID</th>
              <th className="py-3">Name</th>
              <th className="py-3">Price</th>
              <th className="py-3">Category</th>
              <th className="py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item) => (
              <tr key={item.id} className="border-b text-center">
                <td className="py-3">{item.id}</td>
                <td className="py-3">{item.name || item.title}</td>
                <td className="py-3">${item.price}</td>
                <td className="py-3">
                  {item.category?.name || item.categoryId || '-'}
                </td>
                <td className="py-3">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="rounded-lg border border-black px-4 py-2 text-black"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

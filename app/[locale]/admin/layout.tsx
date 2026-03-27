'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getCookieValue, logoutUser } from '@/lib/auth';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname(); // 👈 qo‘shildi
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const role = getCookieValue('role');

    if (role !== 'ADMIN') {
      router.replace('/');
    }
  }, [router]);

  const handleLogout = () => {
    logoutUser();
    router.push('/');
  };

  // 👇 active tekshiruvchi funksiya
  const isActive = (path: string) => pathname === path;

  return (
    <div className="max-w-7xl mx-auto bg-white/30 rounded-[30px] text-black">
      <div className="flex">
        <aside className="min-h-screen border-r border-black w-[260px] px-5 py-6 fixed">
          <h1 className="mb-8 text-3xl font-extrabold">Admin</h1>

          <nav className="space-y-3">
            <Link
              href="/uz/admin"
              className={`block rounded-xl px-4 py-3 hover:bg-white/20 ${
                isActive('/uz/admin') ? 'bg-white/30' : ''
              }`}
            >
              Dashboard
            </Link>

            <Link
              href="/uz/admin/menu"
              className={`block rounded-xl px-4 py-3 hover:bg-white/20 ${
                isActive('/uz/admin/menu') ? 'bg-white/30' : ''
              }`}
            >
              Menu
            </Link>

            <Link
              href="/uz/admin/news"
              className={`block rounded-xl px-4 py-3 hover:bg-white/20 ${
                isActive('/uz/admin/news') ? 'bg-white/30' : ''
              }`}
            >
              News
            </Link>

            <Link
              href="/uz/admin/category"
              className={`block rounded-xl px-4 py-3 hover:bg-white/20 ${
                isActive('/uz/admin/category') ? 'bg-white/60' : ''
              }`}
            >
              Category
            </Link>

            <Link
              href="/uz/admin/contact"
              className={`block rounded-xl px-4 py-3 hover:bg-white/20 ${
                isActive('/uz/admin/contact') ? 'bg-white/30' : ''
              }`}
            >
              Contact
            </Link>
          </nav>
        </aside>

        <main className="flex-1">
          <header className="flex ml-68 items-center justify-between border-b px-8 py-5">
            <button
              onClick={() => router.back()}
              className="rounded-xl border px-4 py-2"
            >
              Back
            </button>

            <button
              onClick={() => setOpen(true)}
              className="rounded-xl bg-black px-5 py-2 text-white"
            >
              Logout
            </button>
          </header>

          <div className="p-8 ml-68">{children}</div>
        </main>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-[320px] rounded-2xl bg-white p-6 text-center shadow-xl">
            <h2 className="mb-4 text-lg font-semibold">Brat ketyapsizmi?</h2>

            <div className="flex justify-center gap-14">
              <button
                onClick={() => setOpen(false)}
                className="rounded-xl border px-4 py-2"
              >
                Bekor qilish
              </button>
              <button
                onClick={handleLogout}
                className="rounded-xl bg-red-500 px-4 w-20 py-2 text-white"
              >
                Ha
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

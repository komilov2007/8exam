'use client';

import { useEffect, useState } from 'react';
import { getAdminContacts } from '@/services';

export default function ContactPage() {
  const [contacts, setContacts] = useState<any[]>([]);

  useEffect(() => {
    const loadContacts = async () => {
      const res = await getAdminContacts();
      const data = Array.isArray(res?.data)
        ? res.data
        : Array.isArray(res)
          ? res
          : [];
      setContacts(data);
    };

    loadContacts();
  }, []);

  return (
    <section>
      <h1 className="mb-8 text-4xl font-extrabold">Contact</h1>

      <div className="space-y-5">
        {contacts.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl bg-transperent border-1 p-6 shadow"
          >
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="mt-1 text-black/70">{item.email}</p>
            <p className="mt-1 text-black/70">{item.phone}</p>
            <p className="mt-3 text-black/60">{item.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

'use client';

import { useEffect, useState } from 'react';
import {
  HeadBtn,
  HeadMail,
  HeadPhone,
  HeadUser,
  Rus,
} from '@/components/svgindex';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import AuthModal from '@/components/AuthModal';
import RegisterModal from '@/components/RegisterModal';
import CartButton from '@/components/CarButton';

const Header = () => {
  const t = useTranslations('Header');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [activeModal, setActiveModal] = useState<'login' | 'register' | null>(
    null
  );
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleChangeLocale = (newLocale: 'ru' | 'uz') => {
    if (locale === newLocale) return;

    const cleanPath = pathname.replace('/ru', '').replace('/uz', '') || '/';
    router.replace(cleanPath, { locale: newLocale });
  };

  const handleLogout = () => {
    document.cookie = 'token=; path=/; max-age=0';
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <>
      <div className="mx-auto flex max-w-7xl items-center justify-between pb-11">
        <div className="mt-4 flex gap-7">
          <div className="flex items-center gap-3">
            <HeadPhone />
            <p className="text-black">{t('phone')}</p>
          </div>

          <div className="flex items-center gap-3">
            <HeadMail />
            <p className="text-black">{t('email')}</p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-7">
          <div className="group relative">
            <div className="flex cursor-pointer select-none items-center gap-2">
              <Rus />
              <span>{t('language')}</span>
              <div className="transition-transform duration-500 group-hover:rotate-180">
                <HeadBtn />
              </div>
            </div>

            <div className="invisible absolute right-0 top-full z-50 mt-2 min-w-37.5 translate-y-3 rounded-xl border border-black/10 bg-white p-2 opacity-0 shadow-lg transition-all duration-500 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <button
                type="button"
                onClick={() => handleChangeLocale('ru')}
                className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition duration-300 hover:bg-black hover:text-white ${
                  locale === 'ru' ? 'bg-black text-white' : 'text-black'
                }`}
              >
                {t('ru')}
              </button>

              <button
                type="button"
                onClick={() => handleChangeLocale('uz')}
                className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition duration-300 hover:bg-black hover:text-white ${
                  locale === 'uz' ? 'bg-black text-white' : 'text-black'
                }`}
              >
                {t('uz')}
              </button>
            </div>
          </div>

          {/* <CartButton /> */}

          <div className="group relative">
            <button
              type="button"
              onClick={() => !user && setActiveModal('login')}
              className="flex h-8 w-32 items-center gap-2 rounded-[5px] bg-black pl-3 pr-2 text-white transition duration-300 hover:bg-gray-800"
            >
              <HeadUser />
              {user ? (
                <span className="text-[10px]">
                  {user.firstName} {user.lastName}
                </span>
              ) : (
                <span className="text-[10px]">{t('login')}</span>
              )}
            </button>

            {user && (
              <div className="invisible absolute right-0 top-full z-50 mt-2 min-w-28 translate-y-3 rounded-xl border border-black/10 bg-white p-2 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="block w-full rounded-lg px-3 py-2 text-left text-sm text-black transition hover:bg-black hover:text-white"
                >
                  logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {activeModal === 'login' && (
        <AuthModal
          onClose={() => setActiveModal(null)}
          onOpenRegister={() => setActiveModal('register')}
        />
      )}

      {activeModal === 'register' && (
        <RegisterModal
          onClose={() => setActiveModal(null)}
          onOpenLogin={() => setActiveModal('login')}
        />
      )}
    </>
  );
};

export default Header;

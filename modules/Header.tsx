'use client';

import {
  HeadBtn,
  HeadMail,
  HeadPhone,
  HeadUser,
  Rus,
} from '@/components/svgindex';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';

const Header = () => {
  const t = useTranslations('Header');
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center max-w-7xl mx-auto justify-between pb-11">
      <div className="flex gap-7 mt-4">
        <div className="flex gap-3 items-center">
          <HeadPhone />
          <p className="text-black">{t('phone')}</p>
        </div>

        <div className="flex gap-3 items-center">
          <HeadMail />
          <p className="text-black">{t('email')}</p>
        </div>
      </div>

      <div className="flex items-center gap-7 mt-4">
        <div className="relative group">
          <div className="flex items-center gap-2 cursor-pointer select-none">
            <Rus />
            <span>{locale === 'ru' ? t('ru') : t('uz')}</span>
            <div className="transition-transform duration-500 group-hover:rotate-180">
              <HeadBtn />
            </div>{' '}
          </div>

          <div
            className="
              absolute right-0 top-full z-50 mt-2 min-w-37.5
              rounded-xl border border-black/10 bg-white p-2 shadow-lg

              opacity-0 invisible translate-y-3
              transition-all duration-500 ease-out

              group-hover:opacity-100
              group-hover:visible
              group-hover:translate-y-0
            "
          >
            <Link
              href={pathname}
              locale="ru"
              className={`block rounded-lg px-3 py-2 text-sm transition duration-300 hover:bg-black hover:text-white ${
                locale === 'ru' ? 'bg-black text-white' : 'text-black'
              }`}
            >
              {t('ru')}
            </Link>

            <Link
              href={pathname}
              locale="uz"
              className={`block rounded-lg px-3 py-2 text-sm transition duration-300 hover:bg-black hover:text-white ${
                locale === 'uz' ? 'bg-black text-white' : 'text-black'
              }`}
            >
              {t('uz')}
            </Link>
          </div>
        </div>

        <button className="flex text-white bg-black w-25.75 h-8 rounded-[5px] pl-3 pr-2 items-center gap-2 transition duration-300 hover:bg-gray-800">
          <HeadUser />
          <span className="text-[10px]">{t('login')}</span>
        </button>
      </div>
    </div>
  );
};

export default Header;

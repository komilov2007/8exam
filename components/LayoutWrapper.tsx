'use client';

import { ReactNode } from 'react';
import { usePathname } from '@/i18n/navigation';
import Header from '@/modules/Header';
import Footer from '@/modules/Footer';

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  const isAdminPage = pathname.startsWith('/admin');

  if (isAdminPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutWrapper;

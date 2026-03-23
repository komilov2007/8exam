import { Right } from '@/components/svgindex';
import MenuHero from '@/modules/MenuHero';
import NewsGallery from '@/modules/NewsGallery';
import Prosmotrit from '@/modules/Prosmotrit';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <MenuHero />
      <NewsGallery />
      <Link href="/news" className="flex justify-end max-w-7xl mx-auto">
        <button className="shrink-0 flex items-center justify-center gap-5 w-70 rounded-xl mt-10 bg-black px-5 py-3 text-white text-sm">
          Посмотреть все <Right />
        </button>
      </Link>
    </div>
  );
};

export default Page;

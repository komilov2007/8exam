import { Right } from '@/components/svgindex';
import Blyuda from '@/modules/Blyuda';
import Bron from '@/modules/Bron';
import Hero from '@/modules/Hero';
import NewsGallery from '@/modules/NewsGallery';
import PochemuM from '@/modules/Pochemu';
import Prosmotrit from '@/modules/Prosmotrit';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Hero />
      <Blyuda />
      <Link href="/menu" className="flex justify-end max-w-7xl mx-auto">
        <button className="shrink-0 flex items-center justify-center gap-5 w-70 rounded-xl mt-10 bg-black px-5 py-3 text-white text-sm">
          Посмотреть все <Right />
        </button>
      </Link>
      <Bron />
      <PochemuM />
      <NewsGallery />
      <Link href="/news" className="flex justify-end max-w-7xl mx-auto">
        <button className="shrink-0 flex items-center justify-center gap-5 w-70 rounded-xl mt-10 bg-black px-5 py-3 text-white text-sm">
          Посмотреть все <Right />
        </button>
      </Link>
    </div>
  );
}

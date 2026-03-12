import Blyuda from '@/modules/Blyuda';
import Bron from '@/modules/Bron';
import Hero from '@/modules/Hero';
import NewsGallery from '@/modules/NewsGallery';
import PochemuM from '@/modules/Pochemu';
import Prosmotrit from '@/modules/Prosmotrit';

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Blyuda />
      <Prosmotrit />
      <PochemuM />
      <Bron />
      <NewsGallery />
      <Prosmotrit />
    </div>
  );
}

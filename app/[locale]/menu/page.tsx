import MenuHero from '@/modules/MenuHero';
import NewsGallery from '@/modules/NewsGallery';
import Prosmotrit from '@/modules/Prosmotrit';

const Page = () => {
  return (
    <div>
      <MenuHero />
      <NewsGallery />
      <div className="mb-10">
        <Prosmotrit />
      </div>
    </div>
  );
};

export default Page;

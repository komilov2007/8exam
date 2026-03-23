import NewsGallery from '@/modules/NewsGallery';
import OrderHero from '@/modules/OrderHero';

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto container">
      <OrderHero />
      <NewsGallery />
    </div>
  );
};

export default Page;

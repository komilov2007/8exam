import Image from 'next/image';

const NewsPageGallery = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center mb-17 text-[48px] font-extrabold">Галерея</h2>
      <div className="flex flex-wrap justify-between">
        <Image src="/newsovqat.png" alt="Ovqat" width={270} height={300} />
        <Image src="/newsovqat.png" alt="Ovqat" width={270} height={300} />
        <Image src="/newsovqat.png" alt="Ovqat" width={270} height={300} />
        <Image src="/newsovqat.png" alt="Ovqat" width={270} height={300} />
        <div className="flex gap-6 mt-8">
          <Image src="/newsovqat.png" alt="Ovqat" width={270} height={300} />
          <Image src="/newsovqat.png" alt="Ovqat" width={270} height={300} />
          <Image src="/newsovqat.png" alt="Ovqat" width={270} height={300} />
          <Image src="/newsovqat.png" alt="Ovqat" width={270} height={300} />
        </div>
      </div>
    </div>
  );
};

export default NewsPageGallery;

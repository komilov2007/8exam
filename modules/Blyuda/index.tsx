import BlyudaItem from '@/components/BlyudeItem';
import Image from 'next/image';

const Blyuda = () => {
  const cards = [
    {
      id: 1,
      image: '/potato.png',
      text: 'Chicken soup',
      name: 'Spicy with garlic',
      price: '$10.00',
    },
    {
      id: 2,
      image: '/potato.png',
      text: 'Chicken soup',
      price: '$10.00',
      name: 'Spicy with garlic',
    },
    {
      id: 3,
      image: '/potato.png',
      text: 'Chicken soup',
      price: '$10.00',
      name: 'Spicy with garlic',
    },
    {
      id: 4,
      image: '/potato.png',
      text: 'Chicken soup',
      price: '$10.00',
      name: 'Spicy with garlic',
    },
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-7xl relative mx-auto">
        <h2 className="text-center mb-40 text-[48px] font-extrabold">
          Популярные блюда
        </h2>
        <div>
          <Image
            src="/leaf4.png"
            alt="leaf"
            width={150}
            height={150}
            className="w-70 h-70 absolute top-100 -left-50 z-1 space-y-reverse rotate-10"
          />
        </div>
        <div className="flex items-end gap-8">
          <div className="grid grid-cols-4 h-69.25 gap-8 flex-1">
            {cards.map((item) => (
              <BlyudaItem
                key={item.id}
                image={item.image}
                text={item.text}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blyuda;

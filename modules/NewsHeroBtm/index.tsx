import { NewsHeroType } from '@/@types';

const NewsHeroBtm = ({ image, text, name, avatar }: NewsHeroType) => {
  const cards = [
    {
      id: 1,
      image: '/gallery.png',
      text: 'Используйте новые структуры, чтобы представить исходный обзор или добраться быстрее, проектируя поход к самым эффективным.',
      name: 'Сергей',
      avatar: '/sergey.png',
    },
    {
      id: 2,
      image: '/gallery.png',
      text: 'Используйте новые структуры, чтобы представить исходный обзор или добраться быстрее, проектируя поход к самым эффективным.',
      name: 'Сергей',
      avatar: '/sergey.png',
    },
    {
      id: 3,
      image: '/gallery.png',
      text: 'Используйте новые структуры, чтобы представить исходный обзор или добраться быстрее, проектируя поход к самым эффективным.',
      name: 'Сергей',
      avatar: '/sergey.png',
    },
    {
      id: 4,
      image: '/gallery.png',
      text: 'Используйте новые структуры, чтобы представить исходный обзор или добраться быстрее, проектируя поход к самым эффективным.',
      name: 'Сергей',
      avatar: '/sergey.png',
    },
    {
      id: 5,
      image: '/gallery.png',
      text: 'Используйте новые структуры, чтобы представить исходный обзор или добраться быстрее, проектируя поход к самым эффективным.',
      name: 'Сергей',
      avatar: '/sergey.png',
    },
    {
      id: 6,
      image: '/gallery.png',
      text: 'Используйте новые структуры, чтобы представить исходный обзор или добраться быстрее, проектируя поход к самым эффективным.',
      name: 'Сергей',
      avatar: '/sergey.png',
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-40 text-[48px] font-extrabold">
          Новости
        </h2>

        <div className="flex items-end gap-8">
          <div className="grid grid-cols-3 h-69.25 gap-8 flex-1">
            {cards.map((item) => (
              <NewsHeroBtm
                key={item.id}
                image={item.image}
                text={item.text}
                name={item.name}
                avatar={item.avatar}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsHeroBtm;

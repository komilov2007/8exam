import PochemuC from '@/components/Pochemu';
import {
  Car,
  Chef,
  Coffee,
  Home,
  Pizza,
  UserHeart,
} from '@/components/svgindex';

const PochemuM = () => {
  const data = [
    {
      id: 1,
      icon: <Coffee />,
      title: 'Качественные продукты',
      text: 'Входные билеты в музей, для посещения достопримечательностей, памятников',
    },
    {
      id: 2,
      icon: <Car />,
      title: 'Быстрая доставка',
      text: 'Входные билеты в музей, для посещения достопримечательностей, памятников',
    },
    {
      id: 3,
      icon: <Pizza />,
      title: 'Вкусные рецепты',
      text: 'Входные билеты в музей, для посещения достопримечательностей, памятников',
    },
    {
      id: 4,
      icon: <Home />,
      title: 'Уютная атмосфера',
      text: 'Входные билеты в музей, для посещения достопримечательностей, памятников',
    },
    {
      id: 5,
      icon: <Chef />,
      title: 'Опытные повара',
      text: 'Входные билеты в музей, для посещения достопримечательностей, памятников',
    },
    {
      id: 6,
      icon: <UserHeart />,
      title: 'Обслуживания',
      text: 'Входные билеты в музей, для посещения достопримечательностей, памятников',
    },
  ];

  return (
    <section className="py-20 container max-w-7xl mx-auto">
      <div className="container mx-auto max-w-7xl">
        {/* top */}
        <h2 className="text-center text-[48px] font-extrabold mb-14">
          Почему именно мы?
        </h2>
        {/* cardlar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-18">
          {data.map((item) => (
            <PochemuC
              key={item.id}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PochemuM;

import { Mail, PhoneCall, Xarita } from './svgindex';

const OrderContactSection = () => {
  const contacts = [
    {
      icon: <Mail />,
      title: 'Напишите нам',
      text1: 'info@bmgsoft.com',
      text2: 't.me/bmgsoft.com',
    },
    {
      icon: <PhoneCall />,
      title: 'Позвоните нам',
      text1: '+998908670988',
      text2: '+998865332322',
    },
    {
      icon: <Xarita />,
      title: 'Посетите нас',
      text1: 'Узбекистан, Ташкент',
      text2: 'Улица, 24',
    },
  ];

  return (
    <section className="w-full flex justify-center px-4 py-16">
      <div className="w-full max-w-5xl">
        <h2 className="text-center text-4xl font-extrabold text-black">
          Связаться с нами
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {contacts.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center text-black"
            >
              <div className="mb-6">{item.icon}</div>

              <h3 className="text-[30px] font-semibold leading-tight">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-black/80">{item.text1}</p>
              <p className="text-sm text-black/80">{item.text2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderContactSection;

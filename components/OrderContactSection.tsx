import { useTranslations } from 'next-intl';
import { Mail, PhoneCall, Xarita } from './svgindex';

const OrderContactSection = () => {
  const t = useTranslations('Sivyas');

  const contacts = [
    {
      id: 1,
      icon: <Mail />,
      title: t('emailtext'),
      text: t('emailemail'),
      text2: t('emailtg'),
    },
    {
      id: 2,
      icon: <PhoneCall />,
      title: t('calltext'),
      text: t('callnumber'),
      text2: t('callnumbertwo'),
    },
    {
      id: 3,
      icon: <Xarita />,
      title: t('maptext'),
      text: t('mapdesc'),
      text2: t('mapkocha'),
    },
  ];

  return (
    <section className="w-full flex justify-center px-4 py-16">
      <div className="w-full max-w-5xl">
        <h2 className="text-center text-4xl font-extrabold text-black">
          {t('title')}
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {contacts.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center text-black"
            >
              <div className="mb-6">{item.icon}</div>

              <h3 className="text-[30px] font-semibold leading-tight">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-black/80">{item.text}</p>
              <p className="text-sm text-black/80">{item.text2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderContactSection;

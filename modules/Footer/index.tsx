import {
  Facebook,
  FooterLogo,
  Instagram,
  Telegram,
  Whatsupp,
} from '@/components/svgindex';

const Footer = () => {
  const socialIcons = [
    { id: 1, icon: <Telegram /> },
    { id: 2, icon: <Whatsupp /> },
    { id: 3, icon: <Facebook /> },
    { id: 4, icon: <Instagram /> },
  ];

  const footerData = [
    {
      title: 'Наши услуги',
      items: ['Столовая', 'Создание сайтов', 'Реклама', 'Услуги SEO'],
    },
    {
      title: 'Наша компания',
      items: ['О компании', 'Скидки', 'Новости'],
    },
    {
      title: 'Адрес',
      items: ['Узбекистан, Ташкент', '+998(90)758383833', 'info@bmgsoft.com'],
    },
  ];

  return (
    <footer className="bg-[url('/footer-bg.png')] mt-10 w-full bg-cover antialiased h-78.5 py-10">
      <div className=" grid grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto  gap-20">
        {/* left */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">
            <FooterLogo />
          </h2>

          <div className="flex items-center gap-3">
            {socialIcons.map((item) => (
              <span key={item.id} className="cursor-pointer">
                {item.icon}
              </span>
            ))}
          </div>
        </div>
        {/* rigth */}
        {footerData.map((section) => (
          <div key={section.title}>
            <h3 className="text-lg font-bold mb-3">{section.title}</h3>

            <ul className="space-y-2 text-lg">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

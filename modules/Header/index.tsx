import {
  HeadBtn,
  HeadMail,
  HeadPhone,
  HeadUser,
  Rus,
} from '@/components/svgindex';

const Header = () => {
  return (
    <div className="flex items-center max-w-7xl mx-auto justify-between pb-11">
      {/* left */}
      <div className="flex gap-7 mt-4">
        <div className="flex gap-3  items-center">
          <HeadPhone />
          <p className="text-black">+998(90)758383833</p>
        </div>
        <div className="flex gap-3  items-center">
          <HeadMail />
          <p className="text-black">info@bmgsoft.com</p>
        </div>
      </div>
      {/* right */}
      <div className="flex items-center gap-7 mt-4">
        <div className="flex items-center gap-2">
          <Rus />
          Русский
          <HeadBtn />
        </div>
        <button className="flex text-white bg-black w-25.75 h-5 rounded-[5px] pl-3 items-center">
          <HeadUser />
          <span className="text-[10px]">Вход в аккаунт</span>
        </button>
      </div>
    </div>
  );
};

export default Header;

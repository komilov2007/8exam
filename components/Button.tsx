import { Right } from './svgindex';

const Button = () => {
  return (
    <button className="shrink-0 flex items-center justify-center gap-5 w-70 rounded-xl mt-10 bg-black px-5 py-3 text-white text-sm">
      Посмотреть все <Right />
    </button>
  );
};

export default Button;

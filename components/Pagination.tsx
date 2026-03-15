import { MenuRight } from './svgindex';

const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="w-10 h-10 bg-white/30 border flex items-center justify-center text-black text-[20px] rounded-full p-3">
        1
      </div>{' '}
      <div className="w-10 h-10 bg-white/30 border flex items-center justify-center text-black text-[20px] rounded-full p-3">
        ...
      </div>
      <div className="text-black ">
        <MenuRight />
      </div>
    </div>
  );
};

export default Pagination;

import { PochemuType } from '@/@types';

const PochemuC = ({ icon, title, text }: PochemuType) => {
  return (
    <div className="text-start max-w-7xl mx-auto container space-y-4 mr-10">
      <div className="flex justify-start">{icon}</div>
      <h3 className="text-[32px] font-semibold">{title}</h3>
      <p className="opacity-80">{text}</p>
    </div>
  );
};

export default PochemuC;

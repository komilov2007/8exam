import Image from 'next/image';

const OrderHeroItem = () => {
  const schedule = [
    { day: 'Понедельник', time: '10:00-23:00' },
    { day: 'Вторник', time: '10:00-23:00' },
    { day: 'Среда', time: '10:00-23:00' },
    { day: 'Четверг', time: '10:00-23:00' },
    { day: 'Пятница', time: '10:00-23:00' },
    { day: 'Воскресенье', time: '11:00-22:00' },
  ];

  return (
    <section className="w-full flex justify-center -mt-40">
      <div className="w-275 aspect-square flex items-center justify-between gap-16  rounded-xl p-12">
        <div className="w-[45%] text-[20px]">
          <h2 className="text-[32px] font-bold mb-8">Часы работы</h2>

          <div className="space-y-4">
            {schedule.map((item) => (
              <div
                key={item.day}
                className="flex font-semibold justify-between border-b border-gray-400 pb-2 text-"
              >
                <span className="">{item.day}</span>
                <span>{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-125 h-169 rounded-[45px] ml-20  border-2 border-green-500">
          <Image src="/stakan.png" alt="restaurant" fill className="" />
        </div>
      </div>
    </section>
  );
};

export default OrderHeroItem;

import Image from 'next/image';

type NewsCardProps = {
  image?: string;
  text: string;
  name: string;
  avatar?: string;
};

const NewsCard = ({ image, text, name, avatar }: NewsCardProps) => {
  let imageSrc = '';

  if (typeof image === 'string' && image.trim()) {
    const trimmed = image.trim();

    if (
      trimmed.startsWith('http://') ||
      trimmed.startsWith('https://') ||
      trimmed.startsWith('/')
    ) {
      imageSrc = trimmed;
    } else {
      imageSrc = `https://anorkhulov.uz/${trimmed}`;
    }
  }

  let avatarSrc = '';

  if (typeof avatar === 'string' && avatar.trim()) {
    const trimmed = avatar.trim();

    if (
      trimmed.startsWith('http://') ||
      trimmed.startsWith('https://') ||
      trimmed.startsWith('/')
    ) {
      avatarSrc = trimmed;
    } else {
      avatarSrc = `https://anorkhulov.uz/${trimmed}`;
    }
  }

  return (
    <div className="relative mb-30 max-w-7xl mx-auto container rounded-[22px] bg-white/30 backdrop-blur-md px-5 pb-5 pt-14 shadow-md">
      {/* image */}
      <div className="absolute w-53.25 h-39.25 -top-22 left-32 -translate-x-1/2">
        <div className="relative w-53.25 h-39.25 rounded-[18px] overflow-hidden border-2 border-green-500">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          )}
        </div>
      </div>

      {/* text */}
      <p className="mt-10 leading-5 text-black/70 mb-5">{text}</p>

      {/* author */}
      <div className="flex items-center gap-2">
        <div className="relative w-11 h-11 rounded-full overflow-hidden">
          {avatarSrc && (
            <Image
              src={avatarSrc}
              alt={name}
              fill
              sizes="44px"
              className="object-cover"
            />
          )}
        </div>

        <span className="font-bold">{name}</span>
      </div>
    </div>
  );
};

export default NewsCard;

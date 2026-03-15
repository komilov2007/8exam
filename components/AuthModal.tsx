import { Qoshiq } from './svgindex';

const AuthModal = () => {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/modalbg.png')" }}
    >
      <div className="absolute inset-0 backdrop-blur-md" />

      <div className="relative z-10 flex aspect-square w-full max-w-107.5 flex-col justify-center rounded-[28px] bg-white/65 px-10 py-10 shadow-xl backdrop-blur-xl">
        <div className="absolute left-1/4 top-0 flex h-19.5 w-19.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white/80 p-10 bg-black text-white shadow-lg">
          <span className="">
            <Qoshiq />
          </span>
        </div>

        <h2 className="mt-6 text-center text-[40px] font-extrabold leading-tight text-black">
          Вход в аккаунт
        </h2>

        <form className="mt-10 flex flex-1 flex-col">
          <div className="space-y-8">
            <div className="pb-2">
              <input
                type="text"
                placeholder="Ваше имя пользователя"
                className="border-b w-87.5 border-black/30 bg-transparent outline-none pb-2"
              />
            </div>

            <div className="border-b border-black/35 pb-2">
              <input
                type="password"
                placeholder="Пароль"
                className="w-full bg-transparent text-[14px] text-black placeholder:text-black/45 outline-none"
              />
            </div>
          </div>

          <button
            type="button"
            className="mt-3 self-start text-[11px] text-black hover:underline"
          >
            Забыли пароль?
          </button>

          <button
            type="submit"
            className="mx-auto mt-8 rounded-2xl bg-black px-8 py-4 text-[14px] font-medium text-white transition hover:opacity-90"
          >
            Вход в аккаунт
          </button>

          <button
            type="button"
            className="mx-auto mt-4 text-[11px] text-[#2d2a85] hover:underline"
          >
            Еще нет учетной записи?
          </button>
        </form>
      </div>
    </section>
  );
};

export default AuthModal;

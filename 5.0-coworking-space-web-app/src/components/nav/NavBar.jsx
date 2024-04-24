export default function NavBar() {
  return (
    <div className="w-[1920px] h-[94px] px-[273px] bg-white justify-center items-center inline-flex">
      <div className="grow shrink basis-0 h-[94px] px-8 justify-between items-center flex">
        <a
          className="grow shrink basis-0 p-2.5 flex-col justify-center items-start gap-2.5 inline-flex"
          href="/src/app/layout.jsx"
        >
          <div className="text-neutral-700 text-[32px] font-medium font-['Plus Jakarta Sans'] uppercase leading-[41.60px]">
            Logo
          </div>
        </a>
        <div className="grow shrink basis-0 h-[17px] justify-between items-center flex">
          <a
            className="justify-start items-center gap-1 flex"
            href="/src/app/layout.jsx"
          >
            <div className="text-neutral-700 text-2xl font-[BebasNeue]">
              Home
            </div>
          </a>
          <a
            className="justify-start items-center gap-1 flex"
            href="/src/app/pages/ServicesPage.jsx"
          >
            <div className="text-neutral-700 text-2xl font-[BebasNeue]">
              Service
            </div>
            <div className="w-3 h-3 relative" />
          </a>
          <a
            className="justify-start items-center gap-1 flex"
            href="/src/app/layout.jsx"
          >
            <div className="text-neutral-700 text-2xl font-[BebasNeue]">
              BLog
            </div>
          </a>
          <a
            className="justify-start items-center gap-1 flex"
            href="/src/app/layout.jsx"
          >
            <div className="text-neutral-700 text-2xl font-[BebasNeue]">
              about
            </div>
          </a>
        </div>
        <div className="grow shrink basis-0 h-[57px] justify-end items-center flex gap-[40px]">
          <a
            className="justify-start items-center gap-1 flex"
            href="/src/app/layout.jsx"
          >
            <div className="text-neutral-700 text-2xl font-[BebasNeue]">
              login
            </div>
          </a>
          <button className="p-5 bg-pink-400 rounded-[32px] justify-center items-center gap-2.5 flex">
            <div className="text-center text-white text-2xl font-[BebasNeue]">
              sign in
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

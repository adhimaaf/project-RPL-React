export default function Footer() {
  return (
    <section className="bg-white">
      <div className="w-[1920px] h-[369px] p-[100px] rounded-tl-[40px] rounded-tr-[40px] justify-start items-start gap-20 inline-flex bg-[url('../../public/assets/img/footerBg.png')]">
        <div className="grow shrink basis-0 self-stretch flex-col justify-between items-start inline-flex">
          <div className="self-stretch h-[52px] flex-col justify-start items-start gap-3 flex">
            <div className="text-center text-neutral-700 text-[32px] font-medium font-['Plus Jakarta Sans'] uppercase leading-[41.60px]">
              LOGO
            </div>
            <div className="text-neutral-700 text-xs font-medium font-['Montserrat'] leading-none">
              Deskrpisi usaha
            </div>
          </div>
          <div className="self-stretch h-[45px] flex-col justify-start items-start gap-3 flex">
            <div className="text-neutral-700 text-2xl font-[BebasNeue] leading-loose">
              Alamat
            </div>
            <div className="self-stretch text-neutral-700 text-xs font-medium font-['Montserrat'] leading-none">
              CitraLand Tallasacity, Ruko Centerum Arcade, Jl. Jalur Lingkaran
              Barat No.51 Blok RA1, Kec. Tamalanrea, Kota Makassar, Sulawesi
              Selatan 90241
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 h-[169px] justify-between items-start flex">
          <div className="flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch text-neutral-700 text-2xl font-[BebasNeue] leading-loose">
              browse
            </div>
            <div className="self-stretch h-[136px] flex-col justify-center items-start gap-2 flex">
              <a
                className="text-neutral-700 text-xs font-medium font-['Montserrat'] leading-none"
                href="/src/app/layout.jsx"
              >
                Home
              </a>
              <a
                className="text-neutral-700 text-xs font-medium font-['Montserrat'] leading-none"
                href="/src/app/layout.jsx"
              >
                Services
              </a>
              <a
                className="text-neutral-700 text-xs font-medium font-['Montserrat'] leading-none"
                href="/src/app/layout.jsx"
              >
                Blog
              </a>
              <a
                className="text-neutral-700 text-xs font-medium font-['Montserrat'] leading-none"
                href="/src/app/layout.jsx"
              >
                About
              </a>
              <a
                className="text-neutral-700 text-xs font-medium font-['Montserrat'] leading-none"
                href="/src/app/layout.jsx"
              >
                Contact
              </a>
              <a
                className="text-neutral-700 text-xs font-medium font-['Montserrat'] leading-none"
                href="/src/app/layout.jsx"
              >
                Something
              </a>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch text-neutral-700 text-2xl font-[BebasNeue] leading-loose">
              Services
            </div>
            <div className="self-stretch h-[136px] flex-col justify-center items-start gap-2 flex">
              <a
                className="text-neutral-700 text-xs font-medium font-['Montserrat'] leading-none"
                href="/src/app/layout.jsx"
              >
                Virtual Office
              </a>
              <a
                className="text-neutral-700 text-xs font-medium font-['Montserrat'] leading-none"
                href="/src/app/layout.jsx"
              >
                Private Office
              </a>
              <a
                className="text-neutral-700 text-xs font-medium font-['Montserrat'] leading-none"
                href="/src/app/layout.jsx"
              >
                Meeting Room
              </a>
              <a
                className="text-neutral-700 text-xs font-medium font-['Montserrat'] leading-none"
                href="/src/app/layout.jsx"
              >
                Private Room
              </a>
              <a
                className="text-neutral-700 text-xs font-medium font-['Montserrat'] leading-none"
                href="/src/app/layout.jsx"
              >
                Dedicated Desk
              </a>
              <a
                className="text-neutral-700 text-xs font-medium font-['Montserrat'] leading-none"
                href="/src/app/layout.jsx"
              >
                Coffee Shop
              </a>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch text-neutral-700 text-2xl font-[BebasNeue] leading-loose">
              Get Help
            </div>
            <div className="self-stretch h-16 flex-col justify-center items-start gap-2 flex">
              <a
                className="w-[26px] text-neutral-700 text-xs font-medium font-['Montserrat'] leading-none"
                href="/src/app/layout.jsx"
              >
                FAQ
              </a>
              <a
                className="text-neutral-700 text-xs font-medium font-['Montserrat'] leading-none"
                href="/src/app/layout.jsx"
              >
                Customer Service
              </a>
              <a
                className="text-neutral-700 text-xs font-medium font-['Montserrat'] leading-none"
                href="/src/app/layout.jsx"
              >
                Terms and Conditions
              </a>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch text-neutral-700 text-2xl font-[BebasNeue] leading-loose">
              Contact
            </div>
            <div className="self-stretch h-16 flex-col justify-center items-start gap-2 flex">
              <div className="w-[26px] text-neutral-700 text-xs font-medium font-['Montserrat'] leading-none">
                @5.0coworkingspace
              </div>
              <div className="text-neutral-700 text-xs font-medium font-['Montserrat'] leading-none">
                5.0 Coworking Space
              </div>
              <div className="text-neutral-700 text-xs font-medium font-['Montserrat'] leading-none">
                081343996611
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

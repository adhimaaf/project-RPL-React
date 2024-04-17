export default function navMenuButton() {
  return (
    <div class="w-[1920px] h-[756px] bg-white flex-col justify-center items-start inline-flex">
      <img
        class="w-[2687px] h-[756px] origin-top-left rotate-180"
        src="https://via.placeholder.com/2687x756"
      />
      <div class="w-[960px] h-[756px] pl-[273px] bg-white rounded-tr-[40px] rounded-br-[40px] flex-col justify-center items-center gap-2.5 flex">
        <div class="origin-top-left rotate-180 w-[960px] h-[756px] relative">
          <div class="w-[960px] h-[756px] left-0 top-0 absolute origin-top-left rotate-180 bg-cyan-300"></div>
          <img
            class="w-[960px] h-[166.60px] left-0 top-0 absolute origin-top-left rotate-180"
            src="https://via.placeholder.com/960x167"
          />
          <img
            class="w-[456.20px] h-[756px] left-[-503.79px] top-[0.01px] absolute origin-top-left rotate-180"
            src="https://via.placeholder.com/456x756"
          />
        </div>
        <div class="h-[217px] p-2 flex-col justify-center items-start gap-10 flex">
          <div class="self-stretch text-neutral-700 text-5xl font-bold font-['Bebas Neue'] leading-[64.80px]">
            temukan ruang yang tepat sesuai kebutuhan anda
          </div>
          <div class="p-5 bg-pink-400 rounded-[32px] justify-center items-center gap-2.5 inline-flex">
            <div class="text-center text-white text-[32px] font-bold font-['Bebas Neue']">
              lihat daftar Ruangan tersedia
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

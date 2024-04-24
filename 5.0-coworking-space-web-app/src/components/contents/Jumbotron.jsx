export default function Jumbotron() {
  return (
    <div class="w-[1920px] h-[756px] bg-white flex-col justify-center items-start inline-flex bg-[url('../../public/assets/img/austin-distel-wawEfYdpkag-unsplash.jpg')] bg-cover bg-no-repeat">
      <div class="w-[960px] h-[756px] pl-[273px] bg-white rounded-tr-[40px] rounded-br-[40px] flex-col justify-center items-center gap-2.5 flex bg-[url('../../public/assets/img/jumbotronBannerBg.png')]">
        <div class="h-[217px] p-2 flex-col justify-center items-start gap-10 flex">
          <div class="self-stretch text-neutral-700 text-5xl font-[BebasNeue] leading-[64.80px]">
            temukan ruang yang tepat sesuai kebutuhan anda
          </div>
          <button class="p-5 bg-pink-400 rounded-[32px] justify-center items-center gap-2.5 inline-flex">
            <div class="text-center text-white text-[32px] font-[BebasNeue]">
              lihat daftar Ruangan tersedia
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

import React from "react";

function Login() {
  return (
    <div>
      <div className="w-[1920px] h-[1080px] p-2.5 bg-white justify-center items-center gap-2.5 inline-flex">
        <div className="w-[968px] h-[785px] p-20 bg-amber-400 rounded-[40px] flex-col justify-between items-center inline-flex">
          <div className="p-2.5 flex-col justify-start items-start gap-2.5 flex">
            <div className="text-center text-neutral-700 text-5xl font-[BebasNeue]">
              Masuk ke akun anda
            </div>
          </div>
          <div className="self-stretch h-[246px] p-2.5 flex flex-col justify-center items-center gap-4 ">
            <div className="text-[Montserrat] text-left">Nama</div>
            <div className="self-stretch h-[72px] bg-white rounded-[32px]" />
            <div className="text-[Montserrat] text-left">Email</div>
            <div className="self-stretch h-[72px] bg-white rounded-[32px]" />
          </div>
          <div className="self-stretch h-[220px] p-2.5 flex-col justify-center items-center gap-4 flex">
            <div className="self-stretch h-[105px] relative">
              <div className="w-[788px] h-[105px] left-0 top-0 absolute bg-pink-400 rounded-[32px]" />
              <div className="w-[96.21px] left-[345.61px] top-[35px] absolute text-center text-neutral-100 text-5xl font-[BebasNeue]">
                Login
              </div>
            </div>
            <div className="self-stretch p-2.5 justify-start items-center gap-2.5 inline-flex">
              <div className="w-[372px] h-[59px] text-center text-neutral-700 text-[24px] font-normal font-[Montserrat]">
                Belum punya akun?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

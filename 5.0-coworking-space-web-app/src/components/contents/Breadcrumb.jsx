export default function Breadcrumb() {
  return (
    <div className="w-[1920px] h-[235px] p-[100px] bg-white rounded-bl-[40px] rounded-br-[40px] flex-col justify-start items-start gap-2.5 inline-flex bg-[url('../../public/assets/img/breadcrumbBg.png')]">
      <div className="text-neutral-700 text-2xl font-bold font-[BebasNeue] leading-loose">
        Page title
      </div>
      <div className="text-neutral-700 text-xs font-medium font-['Montserrat'] leading-none">
        Description
      </div>
    </div>
  );
}

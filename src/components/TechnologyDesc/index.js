export default function TechnologyDesc({ data }) {
  return (
    <div
      className="flex flex-col z-10 w-full max-w-[327px] sm:max-w-[458px] xl:max-w-[470px] h-[220px] sm:h-[237px] 
      mt-[26px] sm:mt-[44px] xl:mt-[137px] items-center xl:items-start ml-auto mr-auto xl:ml-[80px] xl:mr-0"
    >
      <h5
        className="font-barlow-condensed text-[14px] sm:text-[16px] leading-[16.8px] sm:leading-[19.2px]
         tracking-[2.36px] sm:tracking-[2.7px] text-[#D0D6F9]"
      >
        THE TERMINOLOGY...
      </h5>
      <h1
        className="font-bellefair text-[24px] sm:text-[40px] xl:text-[56px] leading-[27.5px] sm:leading-[45.84px]
          xl:leading-[64.18px] text-white mt-[9px] sm:mt-[16px] xl:mt-[11px]"
      >
        {data.name.toUpperCase()}
      </h1>
      <p
        className="font-barlow text-[15px] sm:text-[16px] xl:text-[18px] text-center xl:text-left leading-[25px] sm:leading-[28px] 
        xl:leading-[32px] text-[#D0D6F9] mt-[16px] xl:mt-[17px]"
      >
        {data.description}
      </p>
    </div>
  );
}

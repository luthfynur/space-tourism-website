export default function PlanetDescription({ data }) {
  return (
    <div className="flex flex-col items-center xl:items-start xl:ml-[157px] ">
      <h1
        className="text-[56px] sm:text-[80px] xl:text-[100px] font-bellefair h-[64px] 
        sm:h-[92px] xl:h-[115px] text-white leading-[64.18px] sm:leading-[91.68px]
        xl:leading-[114.6px]"
      >
        {data.name.toUpperCase()}
      </h1>
      <p
        className="text-[15px] sm:text-[16px] xl:text-[18px] text-[#D0D6F9] leading-[25px] 
        sm:leading-[28px] xl:leading-[32px] font-barlow mt-[1px] sm:mt-[8px] xl:mt-[14px] 
        sm:w-[573px] xl:w-[444px] mr-[24px] ml-[24px] xl:mr-0 xl:ml-0 text-center xl:text-left"
      >
        {data.description}
      </p>
      <div
        className="w-full max-w-[327px] sm:max-w-[573px] xl:max-w-[444px] h-[1px] bg-[#383B4B] 
        mt-[32px] sm:mt-[49px] xl:mt-[54px] mr-[24px] ml-[24px] xl:mr-0 xl:ml-0"
      />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-0 mt-[32px] sm:mt-[32px]
        xl:mt-[28px] sm:w-[573px] xl:w-[444px]"
      >
        <div className="flex flex-col sm:justify-self-end xl:justify-self-start sm:w-[216px] xl:w-[222px]">
          <h5 className="h-[17px] mt-[0px] text-[14px] leading-[16.8px] tracking-[2.36px] text-center xl:text-left font-barlow-condensed text-[#D0D6F9]">
            AVG. DISTANCE
          </h5>
          <h3 className="mt-[12px] h-[32px] font-bellefair text-[28px] leading-[32.09px] text-center xl:text-left text-white">
            {data.distance.toUpperCase()}
          </h3>
        </div>
        <div className="flex flex-col sm:justify-self-start xl:justify-self-start sm:w-[216px] xl:w-[222px]">
          <h5 className="h-[17px] mt-[32px] sm:mt-[0px] text-[14px] leading-[16.8px] tracking-[2.36px] text-center xl:text-left font-barlow-condensed text-[#D0D6F9]">
            EST. TRAVEL TIME
          </h5>
          <h3 className="mt-[12px] h-[32px] font-bellefair text-[28px] leading-[32.09px] text-center xl:text-left text-white">
            {data.travel.toUpperCase()}
          </h3>
        </div>
      </div>
    </div>
  );
}

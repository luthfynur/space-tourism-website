export default function CrewDescription({ data }) {
  return (
    <div
      className="flex flex-col items-center xl:items-start ml-auto xl:ml-[165.5px] mr-auto h-[262px] sm:h-[182px] xl:h-[248px] w-full max-w-[327px]
      sm:max-w-[592px]"
    >
      <h5
        className="font-bellefair text-[16px] sm:text-[24px] xl:text-[32px] text-white/50 
        leading-[18.34px] sm:leading-[27.5px] xl:leading-[36.67px]"
      >
        {data.role.toUpperCase()}
      </h5>
      <h1
        className="font-bellefair text-[24px] sm:text-[40px] xl:text-[56px] leading-[27.5px] 
        sm:leading-[45.84px] xl:leading-[64.18px] text-white mt-[8px] xl:mt-[15px]"
      >
        {data.name.toUpperCase()}
      </h1>
      <p
        className="font-barlow text-[15px] sm:text-[16px] xl:text-[18px] leading-[25px] 
        sm:leading-[28px] xl:leading-[32px] text-[#D0D6F9] text-center xl:text-left 
        mt-[16px] xl:mt-[27px] xl:w-[444px]"
      >
        {data.bio}
      </p>
    </div>
  );
}

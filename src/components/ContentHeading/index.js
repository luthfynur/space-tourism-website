export default function ContentHeading({
  height = '',
  width = '',
  span = '',
  text = '',
}) {
  return (
    <div
      className={`flex justify-center sm:justify-start xl:justify-start ${height} ${width}
        sm:ml-[38.5px] xl:ml-[166.5px]`}
    >
      <h1
        className="font-barlow-condensed text-[16px] sm:text-[20px] xl:text-[28px] leading-[19.2px]
          sm:leading-[24px] xl:leading-[33.6px] tracking-[2.7px] sm:tracking-[3.38px] 
          xl:tracking-[4.72px] text-white"
      >
        <span
          className="font-barlow-condensed font-bold text-[16px] sm:text-[20px] xl:text-[28px] 
            leading-[19.2px] sm:leading-[24px] xl:leading-[33.6px] tracking-[2.7px] sm:tracking-[3.38px]
          xl:tracking-[4.72px] text-white/25 mr-[18px] sm:mr-[19px] xl:mr-[28px] 
        "
        >
          {span}
        </span>
        {text}
      </h1>
    </div>
  );
}

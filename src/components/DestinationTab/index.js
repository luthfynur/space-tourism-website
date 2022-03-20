export default function DestinationTab({ data, id, onClick }) {
  return (
    <div className="flex justify-center xl:justify-start xl:ml-[147px]">
      {data.map((data, idx) => {
        return (
          <button
            value={idx}
            key={idx}
            className={`h-[28px] sm:h-[34px] xl:h-[34px] text-[14px] sm:text-[16px] xl:text-[16px]
            text-white leading-[16.8px] sm:leading-[19.2px] xl:leading-[19.2px] tracking-[2.36px] 
              sm:tracking-[2.7px] xl:tracking-[2.7px] pb-[7px] sm:pb-[10px] xl:pb-[10px] 
              mr-[13px] sm:mr-[18px] xl:mr-[18px] ml-[13px] sm:ml-[18px] xl:ml-[18px] bg-transparent font-barlow-condensed
              ${
                idx.toString() === id.toString()
                  ? 'border-solid border-b-[3px] border-white'
                  : ''
              } `}
            onClick={onClick}
          >
            {data.name.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

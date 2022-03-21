export default function TechnologyTab({ data, id, onClick }) {
  return (
    <div className="grid grid-cols-3 xl:flex xl:flex-col xl:w-fit xl:ml-[165px] xl:mt-[137px] w-[152px] sm:w-[210px] justify-self-center">
      {data.map((data, idx) => {
        return (
          <button
            key={data.name}
            value={idx}
            onClick={onClick}
            className={`w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] xl:h-[80px] xl:w-[80px] rounded-full border-2 border-white ml-[8px] mr-[8px] xl:ml-[0px]
              ${
                idx.toString() === id.toString()
                  ? 'bg-white text-[#0B0D17]'
                  : 'bg-transparent text-white'
              }
                text-[16px] sm:text-[24px] xl:text-[32px] font-bellefair leading-[18.34px] sm:leading-[27.5px] xl:leading-[36.67px] tracking-[1px] 
                sm:tracking-[1.5px] xl:tracking-[2px] text-center mt-auto mb-auto xl:mt-0 xl:mb-[32px]
              `}
          >
            {idx + 1}
          </button>
        );
      })}
    </div>
  );
}

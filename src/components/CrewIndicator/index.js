export default function CrewIndicator({ data, id, onClick }) {
  return (
    <div className="flex justify-center xl:justify-start">
      {data.map((data, idx) => {
        return (
          <button
            key={data.name}
            className={`rounded-full h-[10px] w-[10px] xl:h-[15px] xl:w-[15px] bg-white  
            ml-[8px] mr-[8px] xl:ml-[0px] xl:mr-[24px] ${
              idx.toString() === id.toString() ? 'opacity-100' : 'opacity-[.17]'
            }`}
            value={idx}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
}

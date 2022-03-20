import CrewContent from '../../components/CrewContent';

export default function Crew({
  height = '',
  width = '',
  background = '',
  backgroundRepeat = '',
  backgroundSize = '',
}) {
  return (
    <div
      className={`relative ${height} ${width} ${background} ${backgroundRepeat} 
        ${backgroundSize}`}
    >
      <CrewContent
        height="h-full sm:h-[1025px] xl:h-[900px]"
        width="w-full"
        paddingTop="pt-[88px] sm:pt-[136px] xl:pt-[212px]"
      />
    </div>
  );
}

import DestinationContent from '../../components/DestinationContent';

export default function Destination({
  height = '',
  width = '',
  background = '',
  backgroundSize = '',
  backgroundRepeat = '',
}) {
  return (
    <div
      className={`relative ${height} ${width} ${background} ${backgroundRepeat} ${backgroundSize}`}
    >
      <DestinationContent
        height="h-full xl:h-[900px]"
        width="w-full"
        paddingTop="pt-[88px] sm:pt-[136px] xl:pt-[212px]"
      />
    </div>
  );
}

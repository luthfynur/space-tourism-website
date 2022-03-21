import DestinationContent from '../../components/DestinationContent';
import { useEffect } from 'react';

export default function Destination({
  height = '',
  width = '',
  background = '',
  backgroundSize = '',
  backgroundRepeat = '',
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

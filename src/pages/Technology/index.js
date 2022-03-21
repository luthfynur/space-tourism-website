import TechnologyContent from '../../components/TechnologyContent';
import { useEffect } from 'react';

export default function Technology({
  height = '',
  width = '',
  background = '',
  backgroundRepeat = '',
  backgroundSize = '',
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`relative ${height} ${width} ${background} ${backgroundRepeat} ${backgroundSize} `}
    >
      <TechnologyContent
        height="h-full sm:h-[1025px] xl:h-[900px]"
        width="w-full"
        paddingTop="pt-[88px] sm:pt-[136px] xl:pt-[212px]"
      />
    </div>
  );
}

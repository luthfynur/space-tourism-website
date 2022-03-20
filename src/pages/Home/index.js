import HomeContent from '../../components/HomeContent';

export default function Home({
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
      <HomeContent
        paddingTop="pt-[112px] sm:pt-[202px] xl:pt-[387px]"
        paddingRight="pr-[55px] xl:pr-[165px]"
        paddingLeft="pl-[55px] xl:pl-[165px]"
        paddingBottom="pb-[40px] sm:pb-[90px] xl:pb-[131px]"
        height="h-full sm:h-full xl:h-full"
        width="w-full xl:w-full"
      />
    </div>
  );
}

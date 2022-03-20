import HomeExploreButton from '../HomeExploreButton';

export default function HomeContent({
  paddingTop = '',
  paddingLeft = '',
  paddingRight = '',
  paddingBottom = '',
  width = '',
  height = '',
}) {
  return (
    <main>
      <div
        className={`flex ${paddingTop} ${paddingRight} ${paddingLeft} ${paddingBottom} ${height} ${width}`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-0 w-full sm:w-full xl:w-full">
          <div className="container sm:w-[450px] sm:h-[334px] xl:w-[450px] xl:h-[382px] sm:justify-self-center xl:justify-self-start">
            <h5 className="font-barlow-condensed text-[#D0D6F9] text-[16px] sm:text-[24px] xl:text-[28px] tracking-[2.7px] sm:tracking-[3.38px] xl:tracking-[4.72px] text-center sm:text-center xl:text-left">
              SO, YOU WANT TO TRAVEL TO
            </h5>
            <h1 className="font-bellefair text-white text-[80px] sm:text-[150px] xl:text-[150px] text-center sm:text-center xl:text-left">
              SPACE
            </h1>
            <p
              className="font-barlow text-[#D0D6F9] text-[15px] sm:text-[16px] xl:text-[18px] leading-[25px]
            sm:leading-7 xl:leading-8 xl:pl-[0.5px] xl:pr-[5.5px] xl:not-italic text-center xl:text-left xl:w-[444px] xl:h-[128px]"
            >
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <HomeExploreButton
            width="w-[150px] sm:w-[242px] xl:w-[274px]"
            height="h-[150px] sm:h-[242px] xl:h-[274px]"
            marginTop="mt-[81px] sm:mt-[150px] xl:mt-[108px]"
            marginLeft="ml-auto sm:ml-auto xl:ml-[0px] lg:justify-self-end"
            marginRight="mr-auto sm:mr-auto xl:mr-[0px]"
            fontSize="text-[20px] sm:text-[32px] xl:text-[32px]"
            paddingTop="pt-[60px] sm:pt-[103px] xl:pt-[119px]"
          />
        </div>
      </div>
    </main>
  );
}

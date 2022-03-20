import Logo from '../../components/Logo';
import ToggleSidebar from '../ToggleSidebar';
import { useState } from 'react';
import MobileSidebar from '../MobileSidebar';
import Navlist from '../Navlist';
import Line from '../Line';

export default function Navbar() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <header className="fixed h-fit w-screen z-50 sm:relative sm:w-full">
      <nav>
        <Logo
          width="w-[40px] sm:w-[48px] xl:w-[48px]"
          height="h-[40px] sm:h-[48px] xl:h-[48px]"
          left="left-[24px] xl:left-[55px]"
          top="top-[24px] xl:top-[64px]"
        />
        <Line
          width="xl:w-full"
          maxWidth="xl:max-w-[473px]"
          height="xl:h-[1px]"
          left="xl:right-[800px]"
          top="xl:top-[88px]"
        />
        <Navlist
          background="xl:bg-[#e1ffe10a] xl:backdrop-blur-[81.5485px] 
          sm:bg-[#e1ffe10a] sm:backdrop-blur-[81.5485px] z-30"
          height="xl:h-[96px] sm:h-[96px]"
          width="xl:w-full sm:w-full"
          maxWidth="xl:max-w-[830px] sm:max-w-[450px]"
          right="xl:right-0 sm:right-0"
          top="xl:top-[40px] sm:top-0"
          visibility="hidden sm:block xl:block"
          paddingTop="xl:pt-[39px] sm:pt-[39px]"
          paddingBottom="xl:pb-[0px] sm:pb-[0px]"
          paddingLeft="xl:pl-[123px] sm:pl-[48px]"
          paddingRight="xl:pr-[15px] sm:pr-[20px]"
        />
        <ToggleSidebar
          toggleSidebar={toggleSidebar}
          setToggleSidebar={() => setToggleSidebar(!toggleSidebar)}
        />
        {toggleSidebar && (
          <MobileSidebar
            toggle={toggleSidebar}
            onClick={() => setToggleSidebar(false)}
          />
        )}
      </nav>
    </header>
  );
}

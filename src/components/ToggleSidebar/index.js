import HamburgerIcon from '../../assets/Images/icon-hamburger.svg';
import CloseIcon from '../../assets/Images/icon-close.svg';

export default function ToggleSidebar({ toggleSidebar, setToggleSidebar }) {
  return (
    <div
      className="absolute w-[24px] h-[21px] top-[33px] right-[24px] block sm:hidden 
    xl:hidden z-50"
    >
      <img
        src={toggleSidebar ? CloseIcon : HamburgerIcon}
        alt="sidebar icon"
        width="24px"
        height="21px"
        onClick={setToggleSidebar}
      />
    </div>
  );
}

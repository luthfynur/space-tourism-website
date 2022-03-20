import { Link, useLocation } from 'react-router-dom';

export default function Navlist({
  height = '',
  width = '',
  maxWidth = '',
  background = '',
  top = '',
  right = '',
  paddingTop = '',
  paddingBottom = '',
  paddingLeft = '',
  paddingRight = '',
  visibility = '',
  onClick,
}) {
  const { pathname } = useLocation();
  return (
    <div className={`relative ${visibility}`}>
      <div
        className={`absolute hidden sm:block xl:block ${height} ${width} ${maxWidth} 
       ${background} ${top} ${right} ${paddingTop} ${paddingBottom} ${paddingLeft}
       ${paddingRight}`}
      >
        <ul
          className="list-none font-barlow-condensed text-white 
        xl:tracking-[2.7px] xl:leading-[19.2px] xl:text-[16px] xl:mr-[11px]
        w-full sm:tracking-[2.36px] sm:leading-[16.8px] sm:text-[14px]"
        >
          <li>
            <Link
              to="/"
              className={`pb-[35px] xl:ml-[0px] float-left
            ${pathname === '/' ? 'border-b-[3px] border-white' : ''}
            `}
            >
              <span className="xl:font-bold float-left xl:mr-[11px] xl:block sm:hidden">
                00
              </span>
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/destination"
              className={`pb-[35px] xl:ml-[48px] float-left sm:ml-[37px]
            ${
              pathname === '/destination' || pathname === '/destination/'
                ? 'border-b-[3px] border-white'
                : ''
            }
          `}
            >
              <span className="xl:font-bold xl:mr-[11px] float-left xl:block sm:hidden">
                01
              </span>
              DESTINATION
            </Link>
          </li>
          <li>
            <Link
              to="/crew"
              className={`pb-[35px] xl:ml-[48px] float-left sm:ml-[37px]
            ${
              pathname === '/crew' || pathname === '/crew/'
                ? 'border-b-[3px] border-white'
                : ''
            }
          `}
            >
              <span className="xl:font-bold xl:mr-[11px] float-left xl:block sm:hidden">
                02
              </span>
              CREW
            </Link>
          </li>
          <li>
            <Link
              to="/technology"
              className={`pb-[35px] xl:ml-[48px] float-left sm:ml-[37px]
            ${
              pathname === '/technology' || pathname === '/technology/'
                ? 'border-b-[3px] border-white'
                : ''
            }
          `}
            >
              <span className="xl:font-bold xl:mr-[11px] float-left xl:block sm:hidden">
                03
              </span>
              TECHNOLOGY
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={`absolute block sm:hidden xl:hidden ${height} ${width} ${maxWidth} 
       ${background} ${top} ${right} ${paddingTop} ${paddingBottom} ${paddingLeft}
       ${paddingRight}`}
      >
        <ul
          className="list-none font-barlow-condensed text-white 
        tracking-[2.7px] leading-[19.2px] text-[16px]
        w-full"
        >
          <li
            onClick={onClick}
            className={`mb-[32px] h-[31px] pt-[5px] ${
              pathname === '/' ? 'border-r-[4px] border-white' : ''
            }`}
          >
            <Link to="/">
              <span className="font-bold mr-[11px]">00</span>
              HOME
            </Link>
          </li>
          <li
            onClick={onClick}
            className={`mb-[32px] h-[31px] pt-[5px] ${
              pathname === '/destination' ? 'border-r-[4px] border-white' : ''
            }`}
          >
            <Link to="/destination">
              <span className="font-bold mr-[11px]">01</span>
              DESTINATION
            </Link>
          </li>
          <li
            onClick={onClick}
            className={`mb-[32px] h-[31px] pt-[5px] ${
              pathname === '/crew' ? 'border-r-[4px] border-white' : ''
            }`}
          >
            <Link to="/crew">
              <span className="font-bold mr-[11px]">02</span>
              CREW
            </Link>
          </li>
          <li
            onClick={onClick}
            className={`mb-[32px] h-[31px] pt-[5px] ${
              pathname === '/technology' ? 'border-r-[4px] border-white' : ''
            }`}
          >
            <Link to="/technology">
              <span className="font-bold mr-[11px]">03</span>
              TECHNOLOGY
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

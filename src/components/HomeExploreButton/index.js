import { Link } from 'react-router-dom';

export default function HomeExploreButton({
  width = '',
  height = '',
  marginTop = '',
  marginLeft = '',
  marginRight = '',
  fontSize = '',
  paddingTop = '',
}) {
  return (
    <Link
      to="/destination"
      className={`rounded-full bg-white ${width} ${height} ${marginTop} ${marginLeft} 
      ${marginRight} ${fontSize} ${paddingTop} text-center font-bellefair
      hover:outline outline-[60px] outline-white/10`}
    >
      EXPLORE
    </Link>
  );
}

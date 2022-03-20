import LogoImg from '../../assets/Images/logo.svg';
import { Link } from 'react-router-dom';

export default function Logo({ height, width, left = '', top = '' }) {
  return (
    <div className={`absolute z-50 ${left} ${top}`}>
      <Link to="/">
        <img src={LogoImg} alt="logo" className={`${height} ${width}`} />
      </Link>
    </div>
  );
}

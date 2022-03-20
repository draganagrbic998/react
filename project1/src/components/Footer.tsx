import { Link } from 'react-router-dom';
import { RouteEnum } from '../constants/router';

export const Footer = () => {
  return (
    <footer>
      <div>jdklasjdksajd asld sakljdsakld jsakld sajdlksajd lksaj dklasj dsa</div>
      <Link to={RouteEnum.ABOUT}>ABOUT</Link>
    </footer>
  );
};

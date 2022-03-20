import { useLocation } from 'react-router-dom';
import { RouteEnum } from '../constants/router';

export const Header = () => {
  const location = useLocation();

  return (
    <header>
      <h1>{location.pathname === RouteEnum.HOME ? 'HOME' : 'ABOUT'}</h1>
    </header>
  );
};

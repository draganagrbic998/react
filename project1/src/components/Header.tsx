import { useLocation } from 'react-router-dom';
import { Button } from './Button';

export const Header = (props: { title?: string; onAdd: () => void }) => {
  const location = useLocation();

  return (
    <header>
      <h1>{location.pathname === '/' ? 'HOME' : 'ABOUT'}</h1>
      <h1 style={headingStyle}>{props.title || 'mama'}</h1>
      <Button onClick={props.onAdd} color={'red'} text="test" />
    </header>
  );
};

const headingStyle: React.CSSProperties = {
  color: 'red',
  backgroundColor: 'black',
};

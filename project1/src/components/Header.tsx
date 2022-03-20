import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { toggleTaskForm } from '../store/actions/ui-data';
import { Button } from './Button';

export const Header = (props: { title?: string }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <header>
      <h1>{location.pathname === '/' ? 'HOME' : 'ABOUT'}</h1>
      <h1 style={headingStyle}>{props.title || 'mama'}</h1>
      <Button onClick={() => dispatch(toggleTaskForm())} color={'red'} text="test" />
    </header>
  );
};

const headingStyle: React.CSSProperties = {
  color: 'red',
  backgroundColor: 'black',
};

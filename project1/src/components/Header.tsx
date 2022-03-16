import { Button } from './Button';

export const Header = (props: { title?: string }) => {
  return (
    <header>
      <h1 style={headingStyle}>{props.title || 'mama'}</h1>
      <Button color={'red'} text="test" />
    </header>
  );
};

const headingStyle: React.CSSProperties = {
  color: 'red',
  backgroundColor: 'black',
};

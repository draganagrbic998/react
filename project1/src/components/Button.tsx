import * as CSS from 'csstype';

export const Button = (props: {
  color?: CSS.Property.BackgroundColor;
  text?: string;
  onClick?: () => void;
}) => {
  return (
    <button onClick={props.onClick} style={{ backgroundColor: props.color }}>
      {props.text}
    </button>
  );
};

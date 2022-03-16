import * as CSS from 'csstype';

export const Button = (props: { color?: CSS.Property.BackgroundColor; text?: string }) => {
  return <button style={{ backgroundColor: props.color }}>{props.text}</button>;
};

import { render, screen } from '@testing-library/react';

test('renders test text', () => {
  render(<div>test</div>);
  expect(screen.getByText('test')).toBeInTheDocument();
});

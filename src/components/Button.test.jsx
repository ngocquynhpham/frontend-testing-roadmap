import { render, screen, fireEvent } from '@testing-library/react';
import {Button} from './Button';

test('renders and clicks', () => {
  const fn = jest.fn(); 
  render(<Button onClick={fn}>Click me</Button>);
  fireEvent.click(screen.getByText('Click me'));
  expect(fn).toHaveBeenCalledTimes(1);
});

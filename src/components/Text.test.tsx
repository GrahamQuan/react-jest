import { screen, render } from '@testing-library/react';
import Text from './Text';

describe('Text Component', () => {
  test('Text render on screen', () => {
    render(<Text title="my-title" />);
    const TextComponent = screen.getByText('my-title');
    expect(TextComponent).toBeInTheDocument();
  });
});

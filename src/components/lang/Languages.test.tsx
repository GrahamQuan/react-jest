import { screen, render } from '@testing-library/react';
import Languages from './Languages';

describe('Languages Component', () => {
  const langList = ['English', 'Chinese', 'Spanish'];

  test('ul render on screen', () => {
    render(<Languages lang={langList} />);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });

  test('li render on screen', () => {
    render(<Languages lang={langList} />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(langList.length);
  });
});

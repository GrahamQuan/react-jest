import { screen, render } from '@testing-library/react';
import App from '../App';

describe('App Page', () => {
  test('App render on screen', () => {
    render(<App />);
    const AppComponent = screen.getByText('App');
    expect(AppComponent).toBeInTheDocument();
  });
});

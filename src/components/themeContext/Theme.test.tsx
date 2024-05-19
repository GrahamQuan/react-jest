import { screen, render } from '@testing-library/react';
import user from '@testing-library/user-event';

import { ThemeProvider } from './ThemeContext';
import ThemeToggler from './ThemeToggler';

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe('ThemeContext', () => {
  test('toggles theme', async () => {
    user.setup();
    renderWithProviders(<ThemeToggler />);

    const themeText = screen.getByText(/current theme/i);
    const toggleButton = screen.getByRole('button', { name: /toggle theme/i });

    expect(themeText).toHaveTextContent('Current theme: light');

    await user.click(toggleButton);
    expect(themeText).toHaveTextContent('Current theme: dark');

    await user.click(toggleButton);
    expect(themeText).toHaveTextContent('Current theme: light');
  });
});

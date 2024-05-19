import { screen, render } from '@testing-library/react';
import user from '@testing-library/user-event';

import Counter from './Counter';

describe('Counter with input Component', () => {
  test('Counter and button render on screen', () => {
    render(<Counter />);
    const h2Elem = screen.getByRole('heading', {
      level: 2,
    });
    expect(h2Elem).toBeInTheDocument();

    const btn = screen.getByRole('button', {
      name: 'increment',
    });
    expect(btn).toBeInTheDocument();
  });

  test('Counter increment function', async () => {
    user.setup();
    render(<Counter />);

    const btn = screen.getByRole('button', {
      name: 'increment',
    });
    await user.click(btn);
    const h2Elem = screen.getByRole('heading', {
      level: 2,
    });
    expect(h2Elem).toHaveTextContent('1');
  });

  test('Counter increment function', async () => {
    user.setup();
    render(<Counter />);

    const btn = screen.getByRole('button', {
      name: 'increment',
    });
    await user.click(btn);
    const h2Elem = screen.getByRole('heading', {
      level: 2,
    });
    expect(h2Elem).toHaveTextContent('1');
  });

  test('Counter input number function', async () => {
    const value = 100;
    user.setup();
    render(<Counter />);

    const input = screen.getByRole('spinbutton');
    await user.type(input, value.toString());
    expect(input).toHaveValue(value);

    const btn = screen.getByRole('button', {
      name: 'submit',
    });
    await user.click(btn);

    const h2Elem = screen.getByRole('heading', {
      level: 2,
    });
    expect(h2Elem).toHaveTextContent(value.toString());
  });

  test('elements in right orders', async () => {
    user.setup();
    render(<Counter />);

    const incrementBtn = screen.getByRole('button', {
      name: 'increment',
    });
    const input = screen.getByRole('spinbutton');
    const submitBtn = screen.getByRole('button', {
      name: 'submit',
    });

    await user.tab();
    expect(incrementBtn).toHaveFocus();
    await user.tab();
    expect(input).toHaveFocus();
    await user.tab();
    expect(submitBtn).toHaveFocus();
  });
});

import { screen, render } from '@testing-library/react';
import user from '@testing-library/user-event';

import Step from './Step';

describe('Step Component', () => {
  test('mock functions', async () => {
    user.setup();
    const step = 100;
    const subFunction = jest.fn();
    const addFunction = jest.fn();
    render(<Step step={step} onSub={subFunction} onAdd={addFunction} />);

    const numElem = screen.getByText(step);
    expect(numElem).toBeInTheDocument();

    const subBtn = screen.getByRole('button', {
      name: 'sub',
    });
    const addBtn = screen.getByRole('button', {
      name: 'add',
    });
    await user.click(subBtn);
    await user.click(addBtn);
    expect(subFunction).toHaveBeenCalledTimes(1);
    expect(addFunction).toHaveBeenCalledTimes(1);
  });
});

import { screen, render } from '@testing-library/react';
import UserBtn from './UserBtn';

describe('UserBtn Component', () => {
  test('UserBtn render on screen at first render', () => {
    render(<UserBtn />);
    const Btn = screen.getByRole('button', {
      name: 'Login',
    });
    expect(Btn).toBeInTheDocument();
  });

  test('UserInfo not render on screen at first render', () => {
    render(<UserBtn />);
    const UserInfo = screen.queryByText('UserInfo');
    expect(UserInfo).not.toBeInTheDocument();
  });

  test('setTimeout update screen', async () => {
    render(<UserBtn />);
    const UserInfo = await screen.findByText('UserInfo', undefined, {
      timeout: 1500,
    });
    expect(UserInfo).toBeInTheDocument();
  });
});

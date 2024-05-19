import { screen, render } from '@testing-library/react';
import Form from './Form';

describe('Form Component', () => {
  test('Form render on screen', () => {
    render(<Form />);
    const h1Elem = screen.getByRole('heading', {
      level: 1,
    });
    expect(h1Elem).toBeInTheDocument();

    const h5Elem = screen.getByRole('heading', {
      level: 5,
    });
    expect(h5Elem).toBeInTheDocument();

    const inputElem = screen.getByRole('textbox', {
      name: 'Name',
    });
    expect(inputElem).toBeInTheDocument();

    const textareaElem = screen.getByRole('textbox', {
      name: 'Description',
    });
    expect(textareaElem).toBeInTheDocument();

    const locationElem = screen.getByRole('combobox');
    expect(locationElem).toBeInTheDocument();

    const termsElem = screen.getByRole('checkbox');
    expect(termsElem).toBeInTheDocument();

    const submitBtn = screen.getByRole('button');
    expect(submitBtn).toBeInTheDocument();

    const imgElem = screen.getByAltText('Random image');
    expect(imgElem).toBeInTheDocument();
  });
});

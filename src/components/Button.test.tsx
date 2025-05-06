import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event'
import { Button } from './Button';

describe('Component Button', () => {
  it('should render and test a click event on button', () => {
    const handleButtonAlert = jest.fn();

    render(
      <Button id="btnAlert" 
          onClick={handleButtonAlert()} 
          text='Saudações' 
          typeButton='primary' />
    );

    userEvent.click(screen.getByRole('button'))
    expect(handleButtonAlert).toHaveBeenCalledTimes(1)

  });
});
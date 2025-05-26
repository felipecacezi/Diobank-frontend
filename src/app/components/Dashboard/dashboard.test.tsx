import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dashboard } from './dashboard';

describe('Dashboard Component', () => {
  it('should call alert with "Olá Mundo" when any button is clicked', async () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<Dashboard />);
    const btnAlert = screen.getByTestId('btnAlert');
    await userEvent.click(btnAlert);
    expect(alertSpy).toHaveBeenCalledWith('Olá Mundo');
    alertSpy.mockRestore();
  });
});
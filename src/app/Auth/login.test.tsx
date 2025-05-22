import { render, screen, fireEvent } from '@testing-library/react';
import { Login } from "./login";
import { MemoryRouter } from 'react-router-dom';
import { AppContext } from '../../components/ContextApi';

describe('Login screen', ()=>{
    it('should be failed login', async () => {
        const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        fireEvent.change(screen.getByTestId('email'), { target: { value: 'errado' } });
        fireEvent.change(screen.getByTestId('password'), { target: { value: 'errado' } });
        fireEvent.click(screen.getByText('Entrar'));

        expect(alertSpy).toHaveBeenCalledWith('Atenção, usuario ou senha inválidos.');
    })

    it('should be successful login', async () => {
        const mockSetIsLoggedIn = jest.fn();
        const mockSetUserName = jest.fn();

        render(
            <AppContext.Provider value={{ userName: '',
                isLoggedIn: false,
                setIsLoggedIn: mockSetIsLoggedIn,
                setUserName: mockSetUserName }}>
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            </AppContext.Provider>
        );

        fireEvent.change(screen.getByTestId('email'), { target: { value: 'admin' } });
        fireEvent.change(screen.getByTestId('password'), { target: { value: 'admin' } });
        fireEvent.click(screen.getByText('Entrar'));

        expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true);
    })
});
import { InputText } from "../../components/InputText"
import { LabelInput } from "../../components/LabelInput"
import { Button } from "../../components/Button"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../components/ContextApi'

export function Login(){
    const { setIsLoggedIn, setUserName } = useContext(AppContext);
    const navigate = useNavigate();
    const [loginName, setLoginName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = ()=>{ 
        if (loginName !== 'admin' && password !== 'admin') {
            alert(`Atenção, usuario ou senha inválidos.`);
            return;
        }

        localStorage.setItem('loggedUser', loginName);
        setIsLoggedIn(true);
        setUserName(loginName);
        navigate('/dashboard');
    }

    useEffect(() => {
        const loggedUser = localStorage.getItem('loggedUser');
        if (loggedUser) {
            setIsLoggedIn(true);
            setUserName(loggedUser);
            navigate('/user');
        }
    }, [setIsLoggedIn, setUserName, navigate]);

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-96">

            <div className="mb-5 text-center font-bold">
                Login
            </div>

            <div className="mb-5">
                <LabelInput id="lblEmail" text="E-mail"/>
                <InputText id="email" 
                    name="email" 
                    type="email" 
                    placeholder="seuemail@email.com"
                    onChange={(e) => setLoginName(e.target.value)} />
            </div>

            <div className="mb-2">
                <LabelInput id="lblSenha" text="Senha"/>
                <InputText id="password" 
                    name="password" 
                    type="password" 
                    onChange={(e)=> setPassword(e.target.value)} />
            </div>

            <div className="flex justify-end mb-5">
                <a href="" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quero me casdatrar</a>
            </div>

            <div className="mb-2">
                <Button id="btnEntrar" text="Entrar" typeButton="primary" onClick={()=>handleLogin()}/>
            </div>

            <div className="flex items-start mb-5">
                <small>
                <a href="" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Esqueceu sua senha?</a>
                </small>
            </div>

            </div>
        </div>
    );
}


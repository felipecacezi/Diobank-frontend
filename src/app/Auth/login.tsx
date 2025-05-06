import { InputText } from "../../components/InputText"
import { LabelInput } from "../../components/LabelInput"
import { Button } from "../../components/Button"
import { useNavigate } from "react-router-dom"


export const Login = () => {
    const navigate = useNavigate();

    const handleLogin = ()=>{ 
        navigate('/dashboard');
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-96">

            <div className="mb-5 text-center font-bold">
                Login
            </div>

            <div className="mb-5">
                <LabelInput id="lblEmail" text="E-mail"/>
                <InputText id="email" name="email" type="email" placeholder="seuemail@email.com" />
            </div>

            <div className="mb-2">
                <LabelInput id="lblSenha" text="Senha"/>
                <InputText id="password" name="password" type="password" />
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


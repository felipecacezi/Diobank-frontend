import { Sidebar } from '../../layouts/sidebar'
import { Content } from '../../layouts/content'
import { Button } from '../../components/Button'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../components/ContextApi'
import { useNavigate } from 'react-router-dom'

export function Dashboard (){
  const navigate = useNavigate();
  const {isLoggedIn, setIsLoggedIn} = useContext(AppContext);
  const handleButtonAlert = ()=>{
    window.alert("Olá Mundo")
  }

  const isLogged = ()=>{
    const loggedUser: string|null = localStorage.getItem('loggedUser') ?? null;
    if (!isLoggedIn && !loggedUser) {
      navigate('/');
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem('loggedUser');
    setIsLoggedIn(false);
    navigate('/');
  }

  useEffect(() => {
    isLogged();
  });
  
  return (
    <div className='flex flex-row h-screen'>
      <Sidebar callbackLogout={handleLogOut}/>
      <Content>
      <div>
        <Button id="btnAlert" 
          onClick={()=> handleButtonAlert()} 
          text='Saudações' 
          typeButton='primary' />
      </div>
      </Content>
    </div>
  );
}
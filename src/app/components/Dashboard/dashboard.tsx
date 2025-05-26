import { Sidebar } from '../../../layouts/sidebar'
import { Content } from '../../../layouts/content'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../../components/ContextApi'
import { useNavigate } from 'react-router-dom'

export function Dashboard ({ children }: any) {
  const loggedUser: string|null = localStorage.getItem('loggedUser') ?? null;
  const navigate = useNavigate();
  const {isLoggedIn, setIsLoggedIn} = useContext(AppContext);

  const isLogged = ()=>{
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
    <div className='flex flex-row h-screen w-screen'>
      <Sidebar callbackLogout={handleLogOut}/>
      <Content>
        {children}
      </Content>
    </div>
  );
}
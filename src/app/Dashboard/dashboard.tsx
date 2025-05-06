import { Sidebar } from '../../layouts/sidebar'
import { Content } from '../../layouts/content'
import { Button } from '../../components/Button'


const handleButtonAlert = ()=>{
  window.alert("Olá Mundo")
}

export const Dashboard = ()=>(
  <div className='flex flex-row h-screen'>
    <Sidebar/>
    <Content>
      
      <div>
        <Button id="btnAlert" 
          onClick={()=> handleButtonAlert()} 
          text='Saudações' 
          typeButton='primary' />
      </div>

    </Content>
  </div>
) 
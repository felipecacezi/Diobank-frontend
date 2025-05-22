import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./components/ContextApi"
import { MainRoutes } from "./app/Routes";

function App() {

  return (
    <BrowserRouter>
      <AppContextProvider>
        <MainRoutes/>
      </AppContextProvider>
    </BrowserRouter>
  )
}

export default App

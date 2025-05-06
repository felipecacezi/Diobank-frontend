import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./app/Auth/login"
import { Dashboard } from "./app/Dashboard/dashboard"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../app/Auth/login"
import { Dashboard } from "../app/Dashboard/dashboard"
import { useContext } from "react";
import { AppContext } from "../components/ContextApi";

export const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext);

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Login/> } />
        </Routes>
    );
}
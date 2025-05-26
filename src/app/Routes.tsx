import { Routes, Route } from "react-router-dom";
import { Login } from "../app/Auth/login"
import { User } from "../app/User/user"

export const MainRoutes = () => {
    let loggedIn = false;
    if (localStorage.getItem("loggedUser")) {
        loggedIn = true;
    }

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/user" element={loggedIn ? <User/> : <Login/> } />
        </Routes>
    );
}
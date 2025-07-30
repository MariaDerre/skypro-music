import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/signin/signin";
import { NotFound } from "./pages/not-found/not-found";
import SignUp from "./pages/signup/signup";
import App from "./App";
import { Favorites } from "./pages/favorites/favorites";
import { Category } from './pages/category';

export const AppRoutes = () => {
    return (
    <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/category/:id" element={<Category />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    );
};
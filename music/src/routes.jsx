import { Route, Routes } from "react-router-dom";
import SignIn from "./components/signin/signin";
import { NotFound } from "./components/not-found/not-found";
import SignUp from "./components/signup/signup";
import App from "./App";
import { Favorites } from "./components/favorites/favorites";
import { Category } from './components/category';

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
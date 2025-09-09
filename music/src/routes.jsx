import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/signin/signin";
import { NotFound } from "./pages/not-found/not-found";
import SignUp from "./pages/signup/signup";
import App from "./App";
import { Favorites } from "./pages/favorites/favorites";
import { Category } from './pages/category';
import {ProtectedRoute} from "./components/protected-route/protected-route"

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      {/* Защищённые маршруты */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<App />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>

      {/* Страница 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
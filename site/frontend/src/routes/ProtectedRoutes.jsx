import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
}

export const ProtectedRoutes = () => {
    const isAuth = useAuth();

    return isAuth ? (
        <Navigate to="/dashboard" replace  />
    ) : (
        <Outlet />
    );
};
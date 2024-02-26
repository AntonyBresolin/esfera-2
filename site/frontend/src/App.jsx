// Rotas
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// Layout geral
import { RootLayout } from "./layout/RootLayout";

// Paginas
import DashboardPage from "./views/DashboardPage";
import LoginPage from "./views/LoginPage";
import NoGroupScreen from "./views/NoGroupScreen";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import ConfigurationPage from "./views/ConfigurationPage";

const router = createBrowserRouter([
  {
    // Rotas protegidas
    Component: ProtectedRoutes,
    children: [
      {
        path: '/',
        Component: RootLayout,
        children: [
          { path: '/', Component: DashboardPage, errorElement: <LoginPage /> },
        ],
      }
    ]
  },
  // Rotas não protegidas
  { path: 'login', Component: LoginPage },
  { path: '*', Component: LoginPage },
  {
    path: 'user', Component: RootLayout, errorElement: <NoGroupScreen />, children: [
      { path: 'dashboard', Component: DashboardPage, errorElement: <LoginPage /> },
      { path: 'configuration', Component: ConfigurationPage, errorElement: <LoginPage /> },
    ]
  },
]);


export default function App() {
  return (
    <RouterProvider router={router} />
  );
};
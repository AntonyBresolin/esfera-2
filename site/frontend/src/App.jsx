// Rotas
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// Layout geral
import { RootLayout } from "./layout/RootLayout";

// Paginas
import DashboardPage from "./views/DashboardPage";
import LoginPage from "./views/LoginPage";
import NoGroupScreen from "./views/NoGroupScreen";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";

const router = createBrowserRouter([
  {
    // Rotas protegidas
    Component: ProtectedRoutes,
    children: [
      {
        path: '/',
        Component: RootLayout,
        children: [
          { path: '/', Component: DashboardPage, errorElement: <NoGroupScreen /> },
        ],
      }
    ]
  },
  // Rotas não protegidas
  { path: 'login', Component: LoginPage },
  { path: '*', Component: NoGroupScreen },
  { path: 'dashboard', Component: DashboardPage, errorElement: <NoGroupScreen /> },
]);


export default function App() {
  return (
    <RouterProvider router={router} />
  );
};
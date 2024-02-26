import { Outlet } from "react-router-dom";
import Topbar from "../components/navbar/Topbar";


export const RootLayout = () => {
  return (
    <>
      <main>
        <div className="bg-defaultBg flex overflow-hidden h-screen">
          <Topbar />
          <Outlet />
        </div>
      </main>
    </>

  );
}
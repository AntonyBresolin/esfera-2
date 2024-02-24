import React, { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from "./Sidebar";


const Topbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <>
      <Sidebar open={open} />
      <nav className="bg-[#fff] px-4 select-none w-full shadow-sm fixed top-0 z-40 flex justify-between items-center">
        <div onClick={handleOpen}>
          <MenuIcon fontSize="" className="text-3xl text-purple-contrast cursor-pointer hover:text-purple-800 ml-[8px]" />
        </div>
        <div className="flex justify-end">
          <div className="flex items-center py-2 ">
            <div className="flex items-center mr-4 hover:text-slate-600 cursor-pointer text-primary">
              <NotificationsIcon fontSize="" className="text-3xl" />
            </div>
            <div className="flex items-center mr-4 hover:text-slate-600 cursor-pointer text-primary">
              <SettingsIcon fontSize="" className="text-3xl" />
            </div>
            <div className="flex items-center mr-4 cursor-pointer text-primary hover:text-slate-600 ">
              <div className="flex flex-col text-center mr-2">
                <h2 className="font-bold text-xl mb-0 pb-0 capitalize">Fernando Pereira</h2>
                <p className="text-secondary italic text-xs	mt-0 pt-0 capitalize">Empresas empresas</p>
              </div>
              <AccountCircleIcon fontSize="" className="text-[45px] " />
            </div>
          </div>
        </div>
      </nav >
    </>
  );
}

export default Topbar;
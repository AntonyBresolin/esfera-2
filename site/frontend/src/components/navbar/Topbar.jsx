import React, { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import EmailIcon from '@mui/icons-material/Email';
import GroupsIcon from '@mui/icons-material/Groups';
import TuneIcon from '@mui/icons-material/Tune';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


const Topbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  const handleDropdown = () => {
    setDropdown(!dropdown);
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
            <div className="flex items-center mr-4 cursor-pointer text-primary hover:text-slate-600 " onClick={() => handleDropdown()}>
              <div className="flex flex-col text-center mr-2">
                <h2 className="font-bold text-xl mb-0 pb-0 capitalize">Fernando Pereira</h2>
                <p className="text-secondary italic text-xs	mt-0 pt-0 capitalize">Empresas empresas</p>
              </div>
              <AccountCircleIcon fontSize="" className="text-[45px] " />
            </div>
          </div>
          <div className={`absolute md:mt-[60px] right-10 bg-[#fff] ${dropdown ? "block" : "hidden"} rounded-b-lg shadow-lg  py-2 `}>
            <ul className="text-purple-contrast">
              <NavLink to="/user/configuration" className="cursor-pointer hover:bg-purple-highlight hover:text-amber p-2 w-48  select-none flex items-center">
                <SettingsIcon fontSize="" className="text-2xl mr-4" />
                <span className="text-black">Configurações de perfil</span>
              </NavLink>
              <NavLink to="/login" className="cursor-pointer hover:bg-purple-highlight hover:text-amber p-2 w-48  select-none flex items-center">
                <EmailIcon fontSize="" className="text-2xl mr-4" />
                <span className="text-black">Configurações de email</span>
              </NavLink>
              <NavLink to="/login" className="cursor-pointer hover:bg-purple-highlight hover:text-amber p-2 w-48  select-none flex items-center">
                <GroupsIcon fontSize="" className="text-2xl mr-4" />
                <span className="text-black">Equipes</span>
              </NavLink>
              <NavLink to="/login" className="cursor-pointer hover:bg-purple-highlight hover:text-amber p-2 w-48  select-none flex items-center">
                <TuneIcon fontSize="" className="text-2xl mr-4" />
                <span className="text-black">Criar serviços</span>
              </NavLink>
              <NavLink to="/login" className="cursor-pointer hover:bg-purple-highlight hover:text-amber p-2 w-48  select-none flex items-center">
                <CloudDownloadIcon fontSize="" className="text-2xl mr-4" />
                <span className="text-black">Importar dados</span>
              </NavLink>
              <NavLink to="/login" className="cursor-pointer hover:bg-purple-highlight hover:text-amber p-2 w-48  select-none flex items-center">
                <DeleteIcon fontSize="" className="text-2xl mr-4" />
                <span className="text-black">Lixeira</span>
              </NavLink>
              <NavLink to="/login" className="cursor-pointer hover:bg-purple-highlight hover:text-amber p-2 w-48  select-none flex items-center">
                <LogoutIcon fontSize="" className="text-2xl mr-4" />
                <span className="text-black">Sair</span>
              </NavLink>
              <NavLink to="/login" className="cursor-pointer hover:bg-purple-highlight hover:text-amber p-2 w-48  select-none flex items-center">
                <QuestionMarkIcon fontSize="" className="text-2xl mr-4" />
                <span className="text-black">Obter ajuda</span>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav >
    </>
  );
}

export default Topbar;
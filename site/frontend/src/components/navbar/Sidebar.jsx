import React, { useState } from 'react';
import classNames from 'classnames';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddchartIcon from '@mui/icons-material/Addchart';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import { NavLink } from 'react-router-dom';


const Sidebar = ({ open }) => {
  const [selected, setSelected] = useState(0);

  const handleSelected = (value) => {
    setSelected(value);
  }

  return (
    <div className={classNames('bg-[#fff] sticky left-0 top-0 h-screen w-1/5 shadow-md ease-in-out duration-150 select-none', {
      'w-[78px]': open,
    })}>
      <nav className='flex flex-col pt-[61px] justify-between h-full'>
        <div className='flex flex-col items-center px-2 py-2'>
          <NavLink to={'/user/dashboard'} className={classNames(
            'w-full flex items-center py-4 px-4 rounded-2xl text-purple-contrast font-bold my-2 cursor-pointer hover:shadow-md duration-300 ease-in-out', {
            'bg-purple-contrast text-white': selected === 0,
          })} onClick={() => handleSelected(0)}>
            <DashboardIcon fontSize='' className={classNames(
              'text-3xl', {
              'text-amber': selected === 0,
            })} />
            <span className={classNames('ml-3', {
              'hidden': open,
            })}>Dashboard</span>
          </NavLink>
          <div className={classNames(
            'w-full flex items-center py-4 px-4 rounded-2xl text-purple-contrast font-bold my-2 cursor-pointer hover:shadow-md duration-300 ease-in-out', {
            'bg-purple-contrast text-white': selected === 1,
          })} onClick={() => handleSelected(1)}>
            <CalendarMonthIcon fontSize='' className={classNames(
              'text-3xl', {
              'text-amber': selected === 1,
            })} />
            <span className={classNames('ml-3', {
              'hidden': open,
            })}> Calendário</span>
          </div>
          <div className={classNames(
            'w-full flex items-center py-4 px-4 rounded-2xl text-purple-contrast font-bold my-2 cursor-pointer hover:shadow-md duration-300 ease-in-out', {
            'bg-purple-contrast text-white': selected === 2,
          })} onClick={() => handleSelected(2)}>
            <PersonAddIcon fontSize='' className={classNames(
              'text-3xl', {
              'text-amber': selected === 2,
            })} />
            <span className={classNames('ml-3', {
              'hidden': open,
            })}>Clientes</span>
          </div>
          <div className={classNames(
            'w-full flex items-center py-4 px-4 rounded-2xl text-purple-contrast font-bold my-2 cursor-pointer hover:shadow-md duration-300 ease-in-out', {
            'bg-purple-contrast text-white': selected === 3,
          })}
            onClick={() => handleSelected(3)}>
            <AddchartIcon fontSize='' className={classNames(
              'text-3xl', {
              'text-amber': selected === 3,
            })} />
            <span className={classNames('ml-3', {
              'hidden': open,
            })}>Propostas</span>
          </div>
          <div className={classNames(
            'w-full flex items-center py-4 px-4 rounded-2xl text-purple-contrast font-bold my-2 cursor-pointer hover:shadow-md duration-300 ease-in-out', {
            'bg-purple-contrast text-white': selected === 4,
          })}
            onClick={() => handleSelected(4)}>
            <PhoneInTalkIcon fontSize='' className={classNames(
              'text-3xl', {
              'text-amber': selected === 4,
            })} />
            <span className={classNames('ml-3', {
              'hidden': open,
            })}>Ligações</span>
          </div>
          <NavLink to='/user/configuration' className={classNames(
            'w-full flex items-center py-4 px-4 rounded-2xl text-purple-contrast font-bold my-2 cursor-pointer hover:shadow-md duration-300 ease-in-out', {
            'bg-purple-contrast text-white': selected === 5,
          })}
            onClick={() => handleSelected(5)}>
            <SettingsIcon fontSize='' className={classNames(
              'text-3xl', {
              'text-amber': selected === 5,
            })} />
            <span className={classNames('ml-3', {
              'hidden': open,
            })}>Configurações</span>
          </NavLink>
        </div>
        <div>
          <hr></hr>
          <div className='text-[#98A2B3] text-center py-4 hover:text-gray-600 ease-in-out duration-150 cursor-pointer'>
            <HelpIcon fontSize='' className='text-xl mr-2' />
            <span className={classNames('', { 'hidden': open })}>Ajuda</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

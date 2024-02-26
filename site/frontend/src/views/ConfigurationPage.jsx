import React, { useState } from 'react';
import classNames from 'classnames';
import PerfilConfiguration from '../components/configuration/PerfilConfiguration';
import GroupConfiguration from '../components/configuration/GroupConfiguration';
import GoalConfiguration from '../components/configuration/GoalConfiguration';

const ConfigurationPage = () => {
  const [selected, setSelected] = useState(0);

  const handleSelected = (value) => {
    setSelected(value);
  }

  return (
    <div className="flex overflow-hidden w-full bg-[#fff] select-none overflow-y-auto">
      <div className="w-full mt-[61px]">
        <h1 className='text-2xl font-semibold p-4 mb-2'>Configurações</h1>
        <ul className='flex items-center px-4 text-secondary'>
          <li className={classNames("px-8 cursor-pointer  ease-in-out", {
            'text-purple-contrast font-bold border-b-2 border-violet-contrast': selected === 0,
          })} onClick={() => handleSelected(0)}>Perfil</li>
          <li className={classNames("px-8 cursor-pointer ease-in-out", {
            'text-purple-contrast font-bold border-b-2 border-violet-contrast': selected === 1,
          })} onClick={() => handleSelected(1)}>Equipe</li>
          <li className={classNames("px-8 cursor-pointer ease-in-out", {
            'text-purple-contrast font-bold border-b-2 border-violet-contrast': selected === 2,
          })} onClick={() => handleSelected(2)}>Metas</li>
          <li className={classNames("px-8 cursor-pointer ease-in-out", {
            'text-purple-contrast font-bold border-b-2 border-violet-contrast': selected === 3,
          })} onClick={() => handleSelected(3)}>Ajuda</li>
        </ul>
        <div className='w-full  mt-4 flex flex-col px-8'>
          {selected === 0 && <PerfilConfiguration />}
          {selected === 1 && <GroupConfiguration />}
          {selected === 2 && <GoalConfiguration />}
        </div>
      </div>
    </div>
  );
};

export default ConfigurationPage;

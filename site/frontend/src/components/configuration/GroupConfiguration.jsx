import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import GroupTable from '../table/GroupTable';

const GroupConfiguration = () => {
  return (
    <form>
      <div className='w-full flex justify-between border-b-2 border-gray-100 py-4 sticky'>
        <div>
          <h2 className='text-xl font-semibold'>Membros da equipe</h2>
          <p className='text-secondary'>Convide membros ou altere detalhes.</p>
        </div>
        <div className='flex items-center'>
          <button className='bg-[#fff] text-primary border-checkbox border-2 px-8 py-1 rounded-lg mr-4 font-semibold hover:bg-defaultBg duration-150 ease-in-out'>Exportar</button>
          <button className='bg-purple-highlight text-white px-8 py-2 rounded-lg font-semibold hover:bg-[#5f04c4] duration-150 ease-in-out flex items-center' type='submit'><AddIcon /> Convidar membro</button>
        </div>
      </div>
      <GroupTable />
    </form>
  );
};

export default GroupConfiguration;

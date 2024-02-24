import React from 'react';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

const NoGroupScreen = () => {
  return (
    <div className='w-full h-[90%] my-4 bg-[#fff] px-[30%] flex flex-col justify-center text-secondary'>
      <div className='flex justify-center flex-col text-center items-center mb-5'>
        <SentimentDissatisfiedIcon fontSize='' className='text-9xl mb-5' />
        <h1 className='text-3xl font-normal'>Lamentamos, parece que você ainda não está em uma equipe.</h1>
      </div>
      <div className='flex justify-center w-full select-none'>
        <button className='bg-fields text-black px-8 py-2 font-medium rounded-md shadow-sm mx-2 hover:bg-[#dedee3] ease-in-out duration-150'>Entrar em uma equipe</button>
        <button className='bg-purple-contrast text-white px-8 py-2 rounded-md shadow-sm mx-2 hover:bg-[#590c75] ease-in-out duration-150'>Criar nova equipe</button>
      </div>
    </div>
  );
};

export default NoGroupScreen;

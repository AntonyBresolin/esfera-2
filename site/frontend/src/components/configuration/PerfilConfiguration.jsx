import React from 'react';

const PerfilConfiguration = () => {
  return (
    <form>
      <div className='w-full flex justify-between border-b-2 border-gray-100 py-4 sticky'>
        <div>
          <h2 className='text-xl font-semibold'>Informações pessoais</h2>
          <p className='text-secondary'>Atualize suas informações pessoais.</p>
        </div>
        <div className='flex items-center'>
          <button className='bg-[#fff] text-primary border-checkbox border-2 px-8 py-1 rounded-lg mr-4 font-semibold hover:bg-defaultBg duration-150 ease-in-out'>Cancelar</button>
          <button className='bg-purple-highlight text-white px-8 py-1 rounded-lg font-semibold hover:bg-[#5f04c4] duration-150 ease-in-out' type='submit'>Salvar</button>
        </div>
      </div>
      <div className='w-full flex justify-between border-b-2 border-gray-100 py-4'>
        <div className='w-full'>
          <h2 className='text-xl font-semibold'>Nome</h2>
          <p className='text-secondary'>Esse nome será exibido no seu perfil.</p>
        </div>
        <div className='w-full'>
          <input type="text" name="firstName" id="firstName" placeholder='Digite seu nome' className="
            w-full p-2 my-2 rounded-md border border-gray-300 shadow-md focus:outline-none 
            focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
          <input type="text" name="lastName" id="lastName" placeholder='Digite seu sobrenome' className="
            w-full p-2 my-2 rounded-md border border-gray-300 shadow-md focus:outline-none 
            focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </div>
        <div className='w-full'></div>
      </div>
      <div className='w-full flex justify-between border-b-2 border-gray-100 py-4'>
        <div className='w-full'>
          <h2 className='text-xl font-semibold'>Email</h2>
          <p className='text-secondary'>Esse e-mail será usado para fazer login.</p>
        </div>
        <div className='w-full'>
          <input type="email" name="email" id="email" placeholder='Digite seu email' className="
            w-full p-2 my-2 rounded-md border border-gray-300 shadow-md focus:outline-none 
            focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </div>
        <div className='w-full'></div>
      </div>
      <div className='w-full flex justify-between border-b-2 border-gray-100 py-4'>
        <div className='w-full'>
          <h2 className='text-xl font-semibold'>Telefone</h2>
        </div>
        <div className='w-full'>
          <input type="number" name="phone" id="phone" placeholder='Digite seu telefone' className="
            w-full p-2 my-2 rounded-md border border-gray-300 shadow-md focus:outline-none 
            focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </div>
        <div className='w-full'></div>
      </div>
      <div className='w-full flex justify-between border-b-2 border-gray-100 py-4'>
        <div className='w-full'>
          <h2 className='text-xl font-semibold'>Alterar senha</h2>
        </div>
        <div className='w-full'>
          <input type="password" name="password" id="password" placeholder='Digite sua senha atual' className="
            w-full p-2 my-2 rounded-md border border-gray-300 shadow-md focus:outline-none 
            focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
          <input type="password" name="newPassword" id="newPassword" placeholder='Digite a nova senha' className="
            w-full p-2 my-2 rounded-md border border-gray-300 shadow-md focus:outline-none 
            focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
          <input type="password" name="repeatNewPassword" id="repeatNewPassword" placeholder='Repita a nova senha' className="
            w-full p-2 my-2 rounded-md border border-gray-300 shadow-md focus:outline-none 
            focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </div>
        <div className='w-full'></div>
      </div>
      <div className='w-full flex justify-between border-b-2 border-gray-100 py-4'>
        <div className='w-full'>
          <h2 className='text-xl font-semibold'>Foto de perfil</h2>
          <p className='text-secondary'>Esta foto será utilizada em seu perfil pessoal.</p>
        </div>
        <div className='w-full '>
          <input type="file" name="profilePicture" id="profilePicture" className="w-full border-2 py-12 cursor-pointer file:block file:text-center file:justify-center file:hover:bg-defaultBg file:duration-300 file:ease-in-out file:mx-auto file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"  />
        </div>
        <div className='w-full'></div>
      </div>
    </form>
  );
};

export default PerfilConfiguration;

import React from 'react';
import EditIcon from '@mui/icons-material/Edit';

const GoalConfiguration = () => {
	return (
		<form>
			<div className='w-full flex justify-between border-b-2 border-gray-100 py-4 sticky'>
				<div>
					<h2 className='text-xl font-semibold'>Metas de Usuário</h2>
					<p className='text-secondary'>Cadastre ou edite as metas.</p>
				</div>
				<div className='flex items-center'>
					<button className='bg-[#fff] text-primary border-checkbox border-2 px-8 py-1 rounded-lg mr-4 font-semibold hover:bg-defaultBg duration-150 ease-in-out'>Cancelar</button>
					<button className='bg-purple-highlight text-white px-8 py-2 rounded-lg font-semibold hover:bg-[#5f04c4] duration-150 ease-in-out flex items-center' type='submit'>Salvar</button>
				</div>
			</div>
			<div className='w-full flex justify-between border-b-2 border-gray-100 py-4'>
				<div className='w-full'>
					<h2 className='text-xl font-semibold'>Clientes cadastrados</h2>
				</div>
				<div className='w-full'>
					<label className='pr-6'>Atual:</label>
					<input type="text" name="clientActual" id="clientActual" placeholder='80' className="
            select-none w-12 text-center p-2 my-2 mx-2 rounded-md border border-gray-300 shadow-md focus:outline-none 
            focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
						disabled
					/>
					<label className='px-4'>Meta:</label>
					<input type="text" name="clientGoal" id="clientGoal" placeholder='160' className="
            select-none w-12 text-center p-2 my-2 mx-2 rounded-md border border-gray-300 shadow-md focus:outline-none 
            focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
					/>
					<div className='ml-2 p-2 cursor-pointer inline-block bg-stroke-color rounded-full hover:bg-defaultBg duration-150 ease-in-out'>
						<EditIcon className='' />
					</div>
				</div>
				<div className='w-full'></div>
			</div>
			<div className='w-full flex justify-between border-b-2 border-gray-100 py-4'>
				<div className='w-full'>
					<h2 className='text-xl font-semibold'>Ligações realizadas</h2>
				</div>
				<div className='w-full'>
					<label className='pr-6'>Atual:</label>
					<input type="text" name="callActual" id="callActual" placeholder='80' className="
            select-none w-12 text-center p-2 my-2 mx-2 rounded-md border border-gray-300 shadow-md focus:outline-none 
            focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
						disabled
					/>
					<label className='px-4'>Meta:</label>
					<input type="text" name="callGoal" id="callGoal" placeholder='160' className="
            select-none w-12 text-center p-2 my-2 mx-2 rounded-md border border-gray-300 shadow-md focus:outline-none 
            focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
					/>
					<div className='ml-2 p-2 cursor-pointer inline-block bg-stroke-color rounded-full hover:bg-defaultBg duration-150 ease-in-out'>
						<EditIcon className='' />
					</div>
				</div>
				<div className='w-full'></div>
			</div>
			<div className='w-full flex justify-between border-b-2 border-gray-100 py-4'>
				<div className='w-full'>
					<h2 className='text-xl font-semibold'>Propostas finalizadas</h2>
				</div>
				<div className='w-full'>
					<label className='pr-6'>Atual:</label>
					<input type="text" name="proposalActual" id="proposalActual" placeholder='80' className="
            select-none w-12 text-center p-2 my-2 mx-2 rounded-md border border-gray-300 shadow-md focus:outline-none 
            focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
						disabled
					/>
					<label className='px-4'>Meta:</label>
					<input type="text" name="proposalGoal" id="proposalGoal" placeholder='160' className="
            select-none w-12 text-center p-2 my-2 mx-2 rounded-md border border-gray-300 shadow-md focus:outline-none 
            focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
					/>
					<div className='ml-2 p-2 cursor-pointer inline-block bg-stroke-color rounded-full hover:bg-defaultBg duration-150 ease-in-out'>
						<EditIcon className='' />
					</div>
				</div>
				<div className='w-full'></div>
			</div>
		</form>
	);
};

export default GoalConfiguration;

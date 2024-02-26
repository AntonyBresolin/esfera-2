import React from 'react';
import GroupTableItem from './GroupTableItem';


const GroupTable = () => {
  return (
    <div>
      <div class="relative overflow-x-auto shadow-md w-full">
        <div class="pb-4 bg-white">
          <label for="table-search" class="sr-only">Search</label>
          <div class="relative mt-3 ml-2">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="text" id="table-search" class="block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Digite o nome do televendedor" />
          </div>
        </div>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead class="text-xs text-primary uppercase bg-[#F9FAFB]">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label for="checkbox-all-search" class="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                Nome
              </th>
              <th scope="col" class="px-6 py-3">
                Função
              </th>
              <th scope="col" class="px-6 py-3">
                E-mail
              </th>
              <th scope="col" class="px-6 py-3">
                Telefone
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
              </th>
            </tr>
          </thead>
          <tbody>
            <GroupTableItem
              name={'Ana Silva'}
              office={"Gerente"}
              email={"ana.silva@email.com"}
              number={"+55 (99) 99999-9999"}
              status={"Disponivel"} />

            <GroupTableItem
              name={'Pedro Ferreira'}
              office={"Televendedor"}
              email={"pedro.ferreira@email.com"}
              number={"+55 (99) 99999-9999"}
              status={"Ausente"} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GroupTable;

import React from 'react';


import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const GroupTableItem = ({ name, office, email, number, status }) => {
  return (
    <tr class="bg-white border-b hover:bg-gray-50">
      <td class="px-6 w-4 p-4 ">
        <div class="flex items-center">
          <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
        </div>
      </td>
      <td class="py-4">
        <div className='bg-defaultBg w-12 h-12 rounded-full inline-block align-middle mr-2'></div>
        <span className='align-middle inline-block text-primary font-semibold'> {name} </span>
      </td>
      <td class="px-6">
        {office}
      </td>
      <td class="px-6">
        {email}
      </td>
      <td class="px-6">
        {number}
      </td>
      <td class="pl-6">
        {status === "Disponivel" ? <CheckIcon className='text-white bg-[#3BB800] rounded-full align-middle inline-block mr-2' /> : <ClearIcon className='text-white bg-icon-secundary rounded-full align-middle inline-block mr-2' />}
        <span className='align-middle'>{status}</span>
      </td>
      <td class="pl-6">
        <DeleteIcon className='text-black bg-defaultBg rounded-full' />
      </td>
    </tr>
  );
};

export default GroupTableItem;

import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { DesktopComputerIcon } from '@heroicons/react/outline'
import ModalAddParts from '../../UI/ModalAddParts/ModalAddParts';

const people = [
  {
  "name": "Cartridge A192",
  "price": 0,
  "id": 1,
  "compatibility": "Hp Deskjet 3322",
  "consumables": [
  {
  "name": "Toner Japan Made",
  "price": 3,
  "id": 1,
  "compatibility": "Cartridge A192"
  }
  ]
  }
  ]

export default function PartsPage() {
  const [userdata, setUserData] = useState(people);
  const [open, setOpen] = useState(false)

  
  useEffect(() => {
      fetch(`http://62.113.99.92:8000/parts?skip=0`)
            .then(response => response.json())
            .then(data => (setUserData(data)));
    }, []);
  console.log(userdata);

    return (
        <>
          <div className="flex flex-col">
            <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                <div className="sm:flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Запчасти</p>
                        <div>
                      <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 
                      bg-red-800 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(true)}
                      
                    >
                      Добавить запчасти
                    </button>
                    <ModalAddParts open={open} setOpen={setOpen}/>
                  </div>
                </div>
            </div>
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-12 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Название
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Расходные материалы
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Наличие
                  </th>

                  <th
                    scope="col"
                    className="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {userdata.map((userdata) => (
                  <tr key={userdata.id}>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                        <DesktopComputerIcon className="h-8 w-8 rounded-full pt-2 text-red-900"  alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{userdata.name}</div>
                          <div className="text-sm text-gray-500">{userdata.compatibility}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{userdata.consumables.length}</div>
                      <div className="text-sm text-gray-500">{people.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        На складе
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{people.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Редактировать
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
        </>
    );
}

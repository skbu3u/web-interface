import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { DesktopComputerIcon } from '@heroicons/react/outline'


const people = [
  {
  "name": "Hp Deskjet 3322",
  "id": 1,
        "parts": [ {
        "name": "Cartridge A192",
        "price": 0,
        "id": 1,
        "compatibility": "Hp Deskjet 3322",
        "consumables": [ {
                "name": "Toner Japan Made",
                "price": 3,
                "id": 1,
                "compatibility": "Cartridge A192"}]}]},
  {
  "name": "Hp Deskjet 1606N",
  "id": 2,
        "parts": []
        },
        {
        "name": "String",
        "id": 3,
        "parts": []
        },
        {
  "name": "Мфу Hp 2090Bn",
  "id": 4,
        "parts": []
        }
        ]

export default function FetchApi() {
  const [userdata, setUserData] = useState(people);
  const [open, setOpen] = useState(false)
  
  useEffect(() => {
      fetch(`http://62.113.99.92:8000/equipments?skip=0`)
            .then(response => response.json())
            .then(data => (setUserData(data)));
    }, []);
    console.log(userdata.length);

    const numofparts = userdata[0].parts.length
    console.log(numofparts)
    return (
        <>
          <div className="flex flex-col">
            <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
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
                    Количество расходников
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Статус
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
                          <div className="text-sm text-gray-500">{userdata.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{userdata.parts.length}</div>
                      <div className="text-sm text-gray-500">{people.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Зарегестрирован
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

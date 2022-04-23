/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from 'react';
import { FcPrint, FcEditImage } from 'react-icons/fc';

export default function Table({ data }) {
  return (
    <div className="flex flex-col">
      <div className=" bg-gray-100 rounded-tl-lg rounded-tr-lg" />
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
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
                    className="px-12 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Информация
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item) => (
                  <tr key={item.id}>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <FcPrint className="h-10 w-10 rounded-full pt-2" alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 mb-1">{item.name}</div>
                          <div className="text-xs text-gray-500">{item.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">1 расходный материал</div>
                      <div className="text-xs text-gray-500">23 запчасти </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Доступен
                      </span>
                    </td>
                    <td className="pl-20 py-4 whitespace-nowrap text-sm text-gray-500">
                      <a href="#">
                        <FcEditImage className="h-7 w-7 contrast-100 hover:contrast-50" />
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
  );
}

// <table>
// <tbody>
//   <tr>
//     <th>Name</th>
//     <th>Surname</th>
//     <th>Email</th>
//   </tr>
//   {data.map((item) => (
//     <tr key={item.id}>
//       <td>{item.name}</td>
//       <td>{item.id}</td>
//       <td>123</td>
//     </tr>
//   ))}
// </tbody>
// </table>

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from 'react';
import { FcEngineering, FcDeleteDatabase } from 'react-icons/fc';

export default function ConsumablesTable({ data }) {
  return (
    <div className="flex flex-col">
      <div className=" bg-gray-100 rounded-tl-lg rounded-tr-lg" />
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
                  />
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((newuserdata) => (
                  <tr key={newuserdata.id}>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <FcEngineering className="h-8 w-8 rounded-full pt-2 text-red-900" alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{newuserdata.name}</div>
                          <div className="text-sm text-gray-500">{newuserdata.compatibility}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        3
                      </div>
                      <div className="text-sm text-gray-500">текст</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        На складе
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">текст</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <FcDeleteDatabase className="h-6 w-6 contrast-100 hover:contrast-50" aria-hidden="true" />
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

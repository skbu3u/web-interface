import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  UserAddIcon,
} from '@heroicons/react/solid';

export default function DashboardUsers() {
  const [userdata, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://62.113.99.92:8000/users?skip=0')
      .then((response) => response.json())
      .then((data) => (setUserData(data)));
  }, []);

  return (
    <div className="flex flex-col">
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
                    Пользователь
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Роль
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Статус
                  </th>
                  <UserAddIcon
                    className="flex-shrink-0 mr-1.5 h-8 w-8 text-cyan-700 shadow-sm text-[11px]
                              font-medium rounded-md hover:text-red-400 focus:outline-none focus:ring-2
                              focus:ring-offset-2 focus:ring-cyan-500"
                    aria-hidden="true"
                    onClick={() => navigate('/userspage/', { replace: true })}
                  />
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {userdata.map((newuserdata) => (
                  <tr key={newuserdata.id}>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={`https://robohash.org/${newuserdata.name}`} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{newuserdata.name}</div>
                          <div className="text-sm text-gray-500">{newuserdata.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Менеджер</div>
                      <div className="text-xs text-gray-500">12 заявок</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Зарегистрирован
                      </span>
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

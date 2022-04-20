/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import { FcPrint, FcEditImage } from 'react-icons/fc';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import ModalAddEq from '../../UI/ModalAddEq/ModalAddEq';
import { API_EQUIP_GET } from '../../Apiconst/apiConstants';

export default function EquipmentsPage() {
  const [userdata, setUserData] = useState([]);
  const [open, setOpen] = useState(false);
  const [id] = useState(8);

  const notify = () => toast.error('Ошибка удаления!', {
    position: 'top-center',
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  injectStyle();

  const deleteeq = () => {
    if (id === '') { console.log(); } else {
      axios.delete(`http://62.113.99.92:8000/equipments/${id}`, {
        id,
      })
        .then((response) => {
          console.log(response.data.msg, 'response.data.msg');
          if (response.data.msg) {
            console.log(response.data.msg, 'response.data.msg');
          }
        })
        .catch((error) => {
          console.log(error, 'error');
          // eslint-disable-next-line no-lone-blocks
          { notify(); }
        });
    }
  };

  useEffect(() => {
    fetch(API_EQUIP_GET)
      .then((response) => response.json())
      .then((data) => (setUserData(data)));
  }, []);

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="flex flex-col">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Оборудование</p>
            <div>
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2
                      bg-red-800 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => setOpen(true)}
              >
                Добавить оборудование
              </button>
              <ModalAddEq open={open} setOpen={setOpen} />
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
                    />
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {userdata.map((newuserdata) => (
                    <tr key={newuserdata.id}>
                      <td className="px-4 py-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <FcPrint className="h-10 w-10 rounded-full pt-2" alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{newuserdata.name}</div>
                            <div className="text-sm text-gray-500">{newuserdata.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{newuserdata.contains.length}</div>
                        <div className="text-xs text-gray-500">активных</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Зарегистрирован
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm leading-5 font-semibold rounded-full " />
                      <td className="flex px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <FcEditImage
                          className="h-8 w-8 contrast-100 hover:contrast-50"
                          aria-hidden="true"
                          onClick={deleteeq}
                        />
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

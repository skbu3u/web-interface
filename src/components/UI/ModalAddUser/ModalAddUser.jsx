/* eslint-disable react/prop-types */
import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { BiHide } from 'react-icons/bi';
import { toast } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { API_USER_REGISTER } from '../../Apiconst/apiConstants';

export default function ModalAddUser({ open, setOpen }) {
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showpass, setShowPass] = useState(false);
  injectStyle();

  // FETCH VERSION
  async function postData() {
    const Data = {
      name,
      password,
    };
    try {
      const res = await fetch(API_USER_REGISTER, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': 'token-value',
        },
        body: JSON.stringify(Data),
      });
      if (res.ok) {
        console.log('Есть ответ');
        const getbody = await res.json();
        toast.success(`Код ${res.status}🦄! ${getbody[0].name} создан!`, {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      if (!res.ok) {
        console.log('Ошибка');
        toast.error(`Код ${res.status}🦄! Ошибка!`, {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (err) { console.log('error'); }
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-50 inset-0 overflow-y-auto" onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-200 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true" />
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="lg:h-[750px] lg:w-[800px] inline-block
                            align-bottom bg-white rounded-lg text-left overflow-hidden
                            shadow-xl transform transition-all
                                        sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" />
                </div>
                {/* Контент модального окна  */}
                <div className="">
                  <div>
                    <label htmlFor="login" className=" leading-none text-gray-800">
                      Логин
                      <input
                        id="login"
                        aria-labelledby="email"
                        type="email"
                        className="bg-gray-100 border rounded
                                                  leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2"
                        placeholder="например: Дулин "
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="mt-6 w-full">
                    <label htmlFor="myInput" className="leading-none text-gray-800">
                      Пароль
                      <div className="relative flex items-center justify-center">
                        <input
                          id="myInput"
                          type={showpass ? 'text' : 'password'}
                          className="bg-gray-100 border rounded leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <div onClick={() => setShowPass(!showpass)} aria-hidden="true" className="absolute right-0 mt-2 mr-3 cursor-pointer">
                          <div id="show" className="text-red-800 hover:text-red-600">
                            <BiHide className="h-5 w-5" />
                          </div>
                          <div id="hide" className="hidden">
                            <BiHide />
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="mt-8">
                    <button
                      type="button"
                      className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700
                                                  text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border
                                                  rounded hover:bg-indigo-600 py-4 w-full"
                      onClick={postData}
                    >
                      Создать пользователя
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

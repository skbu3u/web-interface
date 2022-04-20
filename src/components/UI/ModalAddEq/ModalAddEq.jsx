/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { toast } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { API_EQUIP_ADD } from '../../Apiconst/apiConstants';

export default function ModalAddEq({ open, setOpen }) {
  const [name, setName] = useState('');
  injectStyle();

  // FETCH VERSION
  async function postData() {
    const Data = {
      name,
    };
    try {
      const res = await fetch(API_EQUIP_ADD, {
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
        // eslint-disable-next-line no-useless-concat
        toast.success(`Код ${res.status} ! Оборудование ${getbody.name} добавлено!`, {
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
        toast.error(`Ошибка ${res.status}! Такой обьект уже существует!`, {
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
            enter="ease-out duration-900"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-900"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-opacity-60 bg-slate-700 transition-opacity" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-1"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-1"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="lg:h-[750px] lg:w-[800px] inline-block
                            align-bottom bg-white rounded-lg text-left overflow-hidden
                            shadow-xl transform transition-all
                                        sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
              <div className="bg-white pt-8 px-4 pb-4 sm:p-6 sm:pb-4">
                {/* Контент модального окна  */}
                <div className="">
                  <div>
                    <label className=" text-gray-800">
                      Оборудование
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="bg-gray-100 border rounded
                                        leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2"
                      placeholder="например: Принтер HP 1606 "
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mt-8">
                    <button
                      type="button"
                      className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700
                                        text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border
                                        rounded hover:bg-indigo-600 py-4 w-full"
                      onClick={postData}
                    >
                      Создать оборудование
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

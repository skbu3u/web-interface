/* eslint-disable react/prop-types */
import React, {
  Fragment, useState, useEffect,
} from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { toast } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import Select from 'react-select';
import { Slider } from '@mui/material';
import { API_PARTS_GET, API_CONSUM_ADD } from '../../Apiconst/apiConstants';

export default function ModalAddCons({ open, setOpen }) {
  const [name, setName] = useState('');
  const [compatibility, setCompatibility] = useState('');
  const [comparr, setComparr] = useState([]);
  const [price, setPrice] = useState('');
  const [data, setData] = useState([]);
  // хук для css уведомлений
  injectStyle();
  // эффект хук для получения данных. Асинхронный
  useEffect(() => {
    fetch(API_PARTS_GET)
      .then((response) => response.json())
      .then((newdata) => setData(newdata));
  }, []);

  // берем данные из массива и создаем новый, c новыми элементами
  // передаем в  Select
  const reformatData = function refData(eqs) {
    return eqs.map((eq) => {
      const newObj = {};
      newObj.label = eq.name;
      newObj.value = eq.name;
      return newObj;
    });
  };
  const fullNameArray = reformatData(data);
  // Функция передачи нового массива на основе label в состояние setComparr.
  // Массив созается из облака тегов Select
  const dataevent = (e) => {
    setComparr(Array.isArray(e) ? e.map((x) => x.label) : {});
  };
  // делаем string из обьекта, готовим данные к POST запросу
  const dataset = JSON.stringify(comparr).split('"').join('').slice(1, -1);
  // событие для передачи в состояние setCompatibility
  const setdata = () => {
    setCompatibility(dataset);
  };
  // FETCH VERSION
  async function postdata() {
    const Data = {
      name,
      price,
      compatibility,
    };
    try {
      const res = await fetch(API_CONSUM_ADD, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': 'token-value',
        },
        body: JSON.stringify(Data),
      });
      if (res.ok) {
        console.log('Есть ответ');
        toast.success(`Код ${res.status}🦄! Оборудование создано!`, {
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
                {/* Контент модального окна  */}
                <div className="flex items-center justify-center pb-6">
                  Форма добавления запчастей для техники
                </div>
                <label htmlFor="name" className="text-gray-500 text-sm">
                  Название
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400
                                              text-gray-900 rounded-t-md focus:outline-none focus:z-10 sm:text-sm placeholder:text-xs"
                    placeholder="например: Картридж черный 13а"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <div className="rounded-md shadow-sm -space-y-px pt-8">
                  <div>
                    <label htmlFor="price" className="text-gray-500 text-sm">
                      Стоймость
                      <input
                        id="price"
                        name="price"
                        type="text"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400
                                              text-gray-900 rounded-t-md focus:outline-none focus:z-10 sm:text-sm placeholder:text-xs"
                        placeholder="цена в рублях"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                      <Slider
                        value={price}
                        aria-label="Default"
                        valueLabelDisplay="auto"
                        min={10}
                        max={10000}
                        step={10}
                        size="small"
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
                <div className="pt-8">
                  <div className="text-gray-500 text-sm">
                    Оборудование
                    <Select
                      id="select"
                      type="text"
                      onChange={dataevent}
                      isMulti
                      options={fullNameArray}
                      placeholder="напишите название или выберите из списка"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-20">
                <button
                  type="button"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium
                                            rounded-md text-white bg-cyan-700 hover:bg-cyan-600 focus:outline-none
                                            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onFocus={setdata}
                  onClick={postdata}
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3" />
                  Добавить запчасть
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

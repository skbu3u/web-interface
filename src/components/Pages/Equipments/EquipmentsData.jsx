/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { ToastContainer } from 'react-toastify';

export function EqSearch({ setQuery }) {
  return (
    <div className="rounded-tl-lg rounded-tr-lg pr-8 w-3/5 py-3">
      <input
        className=" text-center w-full py-3 text-xl rounded-lg placeholder:text-sm "
        placeholder="Введите название..."
        onChange={(e) => { if (e.target.value === '' || e.target.value.length <= 1) { console.log('меньше 2'); } else setQuery(e.target.value); }}
      />
    </div>
  );
}

export function EqButton({ setOpen }) {
  return (
    <button
      type="button"
      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2
  bg-red-800 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2
   focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
      onClick={() => setOpen(true)}
    >
      Добавить оборудование
    </button>
  );
}

export default function EqToastContainer() {
  return (
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
  );
}

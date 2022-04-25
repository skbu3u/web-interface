/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import { injectStyle } from 'react-toastify/dist/inject-style';
import PartsToastContainer, { PartsButton, PartsSearch } from './PartsData';
import ModalAddParts from '../../UI/ModalAddParts/ModalAddParts';
import { API_PARTS_GET, API_SEARCH_PARTS } from '../../Apiconst/apiConstants';
import PartsTable from './PartsTable';

export default function PartsPage() {
  const [userdata, setUserData] = useState([]);
  const [query, setQuery] = useState('c');
  const [open, setOpen] = useState(false);
  injectStyle();
  useEffect(() => {
    fetch(API_PARTS_GET)
      .then((response) => response.json())
      .then((data) => (setUserData(data)));
  }, []);

  useEffect(() => {
    fetch(`${API_SEARCH_PARTS}/${query}`)
      .then((response) => response.json())
      .then((data) => (setUserData(data)));
  }, [query]);
  console.log(userdata);
  if (userdata.detail) {
    return (
      <>
        <PartsToastContainer />
        <div className="flex flex-col">
          <div className="px-4 bg-gray-100 rounded-tl-lg rounded-tr-lg">
            <div className="flex items-center justify-between">
              <p className="lg:text-2xl font-bold leading-normal text-gray-800 pr-8">Оборудование</p>
              <PartsSearch query={query} setQuery={setQuery} />
              <div>
                <PartsButton open={open} setOpen={setOpen} />
                <ModalAddParts open={open} setOpen={setOpen} />
              </div>
            </div>
          </div>
          <div className="md:px-10 md:py-7 rounded-tl-lg rounded-tr-lg w-full">
            Ничего не найдено
          </div>
        </div>
      </>
    );
  }
  if (userdata[0]) {
    return (
      <>
        <PartsToastContainer />
        <div className="flex flex-col">
          <div className="px-4 bg-gray-100 rounded-tl-lg rounded-tr-lg">
            <div className="flex items-center justify-between">
              <p className="lg:text-2xl font-bold leading-normal text-gray-800 pr-8">Запчасти</p>
              <PartsSearch query={query} setQuery={setQuery} />
              <div>
                <PartsButton open={open} setOpen={setOpen} />
                <ModalAddParts open={open} setOpen={setOpen} />
              </div>
            </div>
          </div>
          <div className="md:px-10 md:py-7 rounded-tl-lg rounded-tr-lg w-full">
            <PartsTable data={userdata} />
          </div>
        </div>
      </>
    );
  }
}

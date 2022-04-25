/* eslint-disable no-empty */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { injectStyle } from 'react-toastify/dist/inject-style';
import ModalAddEq from '../../UI/ModalAddEq/ModalAddEq';
import EqTable from './EquipmentsTable';
import { API_SEARCH_EQ, API_EQUIP_GET } from '../../Apiconst/apiConstants';
import EqToastContainer, { EqButton, EqSearch } from './EquipmentsData';

export default function EquipmentsPage() {
  const [userdata, setUserData] = useState([]);
  const [query, setQuery] = useState('c');
  const [open, setOpen] = useState(false);
  injectStyle();
  useEffect(() => {
    fetch(API_EQUIP_GET)
      .then((response) => response.json())
      .then((data) => (setUserData(data)));
  }, []);

  useEffect(() => {
    fetch(`${API_SEARCH_EQ}/${query}`)
      .then((response) => response.json())
      .then((data) => (setUserData(data)));
  }, [query]);

  if (userdata.detail) {
    return (
      <>
        <EqToastContainer />
        <div className="flex flex-col">
          <div className="px-4 bg-gray-100 rounded-tl-lg rounded-tr-lg">
            <div className="flex items-center justify-between">
              <p className="lg:text-2xl font-bold leading-normal text-gray-800 pr-8">Оборудование</p>
              <EqSearch query={query} setQuery={setQuery} />
              <div>
                <EqButton open={open} setOpen={setOpen} />
                <ModalAddEq open={open} setOpen={setOpen} />
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
        <EqToastContainer />
        <div className="flex flex-col">
          <div className="px-4 bg-gray-100 rounded-tl-lg rounded-tr-lg">
            <div className="flex items-center justify-between">
              <p className="lg:text-2xl font-bold leading-normal text-gray-800 pr-8">Оборудование</p>
              <EqSearch query={query} setQuery={setQuery} />
              <div>
                <EqButton open={open} setOpen={setOpen} />
                <ModalAddEq open={open} setOpen={setOpen} />
              </div>
            </div>
          </div>
          <div className="md:px-10 md:py-7 rounded-tl-lg rounded-tr-lg w-full">
            <EqTable data={userdata} />
          </div>
        </div>
      </>
    );
  }
}

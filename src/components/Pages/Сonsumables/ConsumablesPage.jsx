/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import { injectStyle } from 'react-toastify/dist/inject-style';
import ConsumablesToastContainer, { ConsumablesButton, ConsumablesSearch } from './ConsumablesData';
import ModalAddParts from '../../UI/ModalAddParts/ModalAddParts';
import { API_CONSUM_GET, API_SEARCH_CONSUMABLES } from '../../Apiconst/apiConstants';
import ConsumablesTable from './ConsumablesTable';

export default function PartsPage() {
  const [userdata, setUserData] = useState([]);
  const [query, setQuery] = useState('c');
  const [open, setOpen] = useState(false);
  injectStyle();
  useEffect(() => {
    fetch(API_CONSUM_GET)
      .then((response) => response.json())
      .then((data) => (setUserData(data)));
  }, []);

  useEffect(() => {
    fetch(`${API_SEARCH_CONSUMABLES}/${query}`)
      .then((response) => response.json())
      .then((data) => (setUserData(data)));
  }, [query]);
  if (userdata.detail) {
    return (
      <>
        <ConsumablesToastContainer />
        <div className="flex flex-col">
          <div className="px-4 bg-gray-100 rounded-tl-lg rounded-tr-lg">
            <div className="flex items-center justify-between">
              <p className="lg:text-2xl font-bold leading-normal text-gray-800 pr-8">Расходные материалы</p>
              <ConsumablesSearch query={query} setQuery={setQuery} />
              <div>
                <ConsumablesButton open={open} setOpen={setOpen} />
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
        <ConsumablesToastContainer />
        <div className="flex flex-col">
          <div className="px-4 bg-gray-100 rounded-tl-lg rounded-tr-lg">
            <div className="flex items-center justify-between">
              <p className="lg:text-2xl font-bold leading-normal text-gray-800 pr-8">Оборудование</p>
              <ConsumablesSearch query={query} setQuery={setQuery} />
              <div>
                <ConsumablesButton open={open} setOpen={setOpen} />
                <ModalAddParts open={open} setOpen={setOpen} />
              </div>
            </div>
          </div>
          <div className="md:px-10 md:py-7 rounded-tl-lg rounded-tr-lg w-full">
            <ConsumablesTable data={userdata} />
          </div>
        </div>
      </>
    );
  }
}

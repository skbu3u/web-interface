/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import Table from './Table';
import { API_EQUIP_GET } from '../Apiconst/apiConstants';

export default function Search() {
  const [userdata, setUserData] = useState([]);
  const [query, setQuery] = useState('');
  const keys = ['name'];
  const search = (data) => data.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query)));

  useEffect(() => {
    fetch(API_EQUIP_GET)
      .then((response) => response.json())
      .then((data) => (setUserData(data)));
  }, []);

  return (
    <div className="md:px-10 md:py-7 rounded-tl-lg rounded-tr-lg w-full">
      <input
        className=" bg-gray-50 text-center w-full py-3 text-xl rounded-lg  placeholder:text-sm "
        placeholder="Введите название..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <Table data={search(userdata)} />
    </div>
  );
}

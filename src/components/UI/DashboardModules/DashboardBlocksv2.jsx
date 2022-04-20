import React, { useEffect, useState } from 'react';
import {
  IoSettingsOutline, IoPeopleOutline, IoDocumentOutline, IoDocumentSharp,
  IoHardwareChipOutline, IoTvOutline,
} from 'react-icons/io5';
import {
  API_USER_GETUSERS, API_EQUIP_GET, API_CONSUM_GET, API_PARTS_GET,
} from '../../Apiconst/apiConstants';

export default function DashboardBlocksv2() {
  const [userdata, setUserData] = useState([]);
  const [eqdata, setEqdata] = useState([]);
  const [partsdata, setPartsdata] = useState([]);
  const [consumdata, setConsumdata] = useState([]);

  useEffect(() => {
    fetch(API_USER_GETUSERS)
      .then((response) => response.json())
      .then((data) => (setUserData(data)));
  }, []);

  useEffect(() => {
    fetch(API_EQUIP_GET)
      .then((response) => response.json())
      .then((data) => (setEqdata(data)));
  }, []);

  useEffect(() => {
    fetch(API_CONSUM_GET)
      .then((response) => response.json())
      .then((data) => (setConsumdata(data)));
  }, []);

  useEffect(() => {
    fetch(API_PARTS_GET)
      .then((response) => response.json())
      .then((data) => (setPartsdata(data)));
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="rounded shadow bg-white dark:bg-gray-800 pl-6 pr-12">
        <div className="md:flex items-center justify-between ">
          <div className="flex items-center pr-2">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
              <IoTvOutline className="w-7 h-7" />
            </div>
            <div className="pl-4">
              <p className="w-11 text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">{eqdata.length}</p>
              <p className="w-8 text-xs leading-3 text-gray-500 pt-2 dark:text-gray-400 ">Оборудование</p>
            </div>
          </div>
          <div className="flex items-center md:pt-0 pt-4 md:pl-10">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
              <IoHardwareChipOutline className="w-7 h-7" />
            </div>
            <div className="pl-4">
              <p className="w-11 text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">{partsdata.length}</p>
              <p className="w-8 text-xs leading-3 text-gray-500 pt-2 dark:text-gray-400">Запчасти</p>
            </div>
          </div>
          <div className="flex items-center md:pt-0 pt-4 md:pl-10">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
              <IoSettingsOutline className="w-7 h-7" />
            </div>
            <div className="pl-4">
              <p className="w-11 text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">{consumdata.length}</p>
              <p className="w-8 text-xs leading-3 text-gray-500 pt-2 dark:text-gray-400">Расходники</p>
            </div>
          </div>
          <div className="flex items-center md:pt-0 pt-4 md:pl-10 ">
            <div className="flex items-center justify-center w-12 h-12 bg-cyan-50 rounded-full">
              <IoPeopleOutline className="w-7 h-7" />
            </div>
            <div className="pl-4">
              <p className="w-11 text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">{userdata.length}</p>
              <p className="w-8 text-xs leading-3 text-gray-500 pt-2 dark:text-gray-400">Cотрудники</p>
            </div>
          </div>
          <div className="flex items-center md:pt-0 pt-4 md:pl-10">
            <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
              <IoDocumentSharp className="w-7 h-7" />
            </div>
            <div className="pl-4">
              <p className="w-11 text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">7</p>
              <p className="w-8 text-xs leading-3 text-gray-500 pt-2 dark:text-gray-400">Черновики</p>
            </div>
          </div>
          <div className="flex items-center md:pt-0 pt-4 md:pl-10">
            <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
              <IoDocumentOutline className="w-7 h-7" />
            </div>
            <div className="pl-4">
              <p className="w-11 text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">43</p>
              <p className="w-8 text-xs leading-3 text-gray-500 pt-2 dark:text-gray-400">Документы</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

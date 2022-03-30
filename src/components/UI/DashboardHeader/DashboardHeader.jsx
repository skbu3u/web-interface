import React from 'react'
import {
    CheckCircleIcon,
    OfficeBuildingIcon,
  } from '@heroicons/react/solid'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useRef} from 'react'
import DashboardBlocksv2 from '../DashboardModules/DashboardBlocksv2';

export default function DashboardHeader() {
  // const navigate = useNavigate();
  // const [open, setOpen] = useState(false)
  // const cancelButtonRef = useRef(null)
  const [username,setUsername] = useState(localStorage.getItem('Username'));

  return (
    <>
             <div className="bg-red shadow max-w-full">
              <div className="px-4 sm:px-6 lg:max-w-full lg:mx-auto lg:px-3">
                <div className="py-1 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                  <div className="min-w-[450px]">
                    <div className="flex items-center">
                      <img
                        className="hidden h-16 w-16 rounded-full sm:block"
                        src="https://thispersondoesnotexist.com/image"
                        alt=""
                      />
                      <div>
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 rounded-full sm:hidden"
                            src="https://robohash.org/${userdata.name}"
                            alt=""
                          />
                          <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                            Добро пожаловать, {username}!
                          </h1>
                        </div>
                        <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                          <dt className="sr-only">Администратор</dt>
                          <dd className="flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6">
                            <OfficeBuildingIcon
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            Администратор
                          </dd>
                          <dt className="sr-only">Статус</dt>
                          <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                            <CheckCircleIcon
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                              aria-hidden="true"
                            />
                            Online
                          </dd>
                        </dl>
                        </div>
                      </div>
                    </div>
                  <div className="flex flex-grow-0"><DashboardBlocksv2/></div>
                </div>
              </div>
            </div>
    
    
    </>
  )
}

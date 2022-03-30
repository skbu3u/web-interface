import React from 'react'
import { useNavigate } from "react-router-dom";
import { Fragment, useRef} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useState } from "react";
import { LockClosedIcon } from '@heroicons/react/solid'
import axios from "axios";

export default function ModalAddParts({ open, setOpen }) {
  const navigate = useNavigate();
  const cancelButtonRef = useRef(null)
  const [name,setName] = useState('')
  const [compatibility,setCompatibility] = useState('')
  // const [password,setPassword] = useState('')
  const [price,setPrice] = useState('')
  const [formIsValid, setFormIsValid] = useState(false);
  
  
  const add = ()=> {
    if(name==='', price==='', compatibility===''){
       return
    }else{
        axios.post('http://62.113.99.92:8000/parts',{
            name: name,
            price: price,
            compatibility: compatibility
        })
        .then(function(response){
          console.log(response.data.msg,'response.data.msg')
          if(response.data.msg){
            console.log(response.data.msg,'response.data.msg')
          }
        })
        .catch(function(error){
          console.log(error,'error');
        });
    }
}

  return (
    <>
        <Transition.Root show={open} as={Fragment}>
             <Dialog as="div" className="fixed z-50 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
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
                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="lg:h-[750px] lg:w-[800px] inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all 
                                        sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        </div>
                                    </div>
                                  {/* This element is  modal contents. */} 

                                  <form className="mt-8 space-y-6" >
                                        <input type="hidden" name="remember" defaultValue="true" />
                                        <div className="rounded-md shadow-sm -space-y-px">
                                          <div>
                                            <label htmlFor="email-address" className="sr-only">
                                              Название
                                            </label>
                                            <input
                                              id="name"
                                              name="name"
                                              type="name"
                                              autoComplete="name"
                                              required
                                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 
                                              text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                              placeholder="Запчасть"
                                              value={name}
                                              onChange={(e)=>setName(e.target.value)}
                                              // onBlur={validateEmailHandler}
                                            />
                                          </div>
                                        </div>
                                        <div className="rounded-md shadow-sm -space-y-px">
                                          <div>
                                            <label htmlFor="email-address" className="sr-only">
                                              Цена
                                            </label>
                                            <input
                                              id="price"
                                              name="price"
                                              type="price"
                                              autoComplete="price"
                                              required
                                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 
                                              text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                              placeholder="Цена"
                                              value={price}
                                              onChange={(e)=>setPrice(e.target.value)}
                                              // onBlur={validateEmailHandler}
                                            />
                                          </div>
                                        </div>
                                        <div className="rounded-md shadow-sm -space-y-px">
                                          <div>
                                            <label htmlFor="email-address" className="sr-only">
                                              Совместимость
                                            </label>
                                            <input
                                              id="compatibility"
                                              name="compatibility"
                                              type="compatibility"
                                              autoComplete="compatibility"
                                              required
                                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 
                                              text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                              placeholder="Совместимость"
                                              value={compatibility}
                                              onChange={(e)=>setCompatibility(e.target.value)}
                                              // onBlur={validateEmailHandler}
                                            />
                                          </div>
                                          </div>
                                        <div className="flex items-center justify-between">
                                           Форма добавления запчастей для техники
                                        </div>

                                        <div>
                                          <button
                                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium 
                                            rounded-md text-white bg-indigo-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            onClick={add}
                                          
                                          >
                                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                              <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" disabled={!formIsValid}/>
                                            </span>
                                            Добавить
                                          </button>
                                        </div>
                                      </form>
                                  {/* This element is  modal contents. */}
                                     {/* <div>
                                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                            <button
                                            type="button"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent 
                                            shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 
                                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => setOpen(false)}
                                            >
                                            Deactivate
                                            </button>
                                            
                                            <button
                                            type="button"
                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm 
                                            px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 
                                            focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                            >
                                            Cancel
                                            </button>
                                        </div>
                                    </div> */}
                                </div>
                                </div>
                </Transition.Child>
               </div>
            </Dialog>   
        </Transition.Root>
    </>
    )
}
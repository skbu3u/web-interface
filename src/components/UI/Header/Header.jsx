import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon, ViewGridIcon,UserCircleIcon,PrinterIcon,ServerIcon,ChipIcon,UsersIcon} from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import logo from './sz.svg'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
const navigate = useNavigate()
const signOut = ()=> {
  localStorage.removeItem('temitope')
  window.location.reload()}

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-slate-700">
          {({ open }) => (
            <>
              <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 "
                        src={logo}
                        alt="CRM"
                      />
                    </div>
                    
                  <div class="mx-auto container px-6 py-2 ">
                    <div class="flex items-center justify-between">
                      <div class="inset-y-0 left-0 flex items-center sm:hidden">
                        <div class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-100 focus:outline-none transition duration-150 ease-in-out">
                        </div>
                      </div>
                      <div class="flex">
                        <div class="flex md:mr-6 xl:mr-16">
                        <Link to="/" class="focus:text-indigo-300 border-b-2 border-transparent focus:border-white
                          flex px-5 items-center py-6 text-sm leading-5 text-white hover:animate-pulse hover:text-red-200  focus:outline-none transition duration-150 ease-in-out">
                            <span class="mr-2">
                              <ViewGridIcon width="30" height="30" stroke="currentColor">
                              </ViewGridIcon>
                            </span>
                            Дашборд
                            </Link>
                            <Link to="/managerpage" class="focus:text-indigo-300 border-b-2 border-transparent focus:border-white
                          flex px-5 items-center py-6 text-sm leading-5 text-white hover:animate-pulse hover:text-red-200  focus:outline-none transition duration-150 ease-in-out">
                            <span class="mr-2">
                              <UserCircleIcon width="30" height="30" stroke="currentColor">
                              </UserCircleIcon>
                            </span>
                            Менеджер
                            </Link>
                            <Link to="/equipments" class="focus:text-indigo-300 border-b-2 border-transparent focus:border-white
                          flex px-5 items-center py-6 text-sm leading-5 text-white hover:animate-pulse hover:text-red-200  focus:outline-none transition duration-150 ease-in-out">
                            <span class="mr-2">
                              <PrinterIcon width="30" height="30" stroke="currentColor">
                              </PrinterIcon>
                            </span>
                            Оборудование
                            </Link>
                            <Link to="/partspage" class="focus:text-indigo-300 border-b-2 border-transparent focus:border-white
                          flex px-5 items-center py-6 text-sm leading-5 text-white hover:animate-pulse hover:text-red-200  focus:outline-none transition duration-150 ease-in-out">
                            <span class="mr-2">
                              <ServerIcon width="30" height="30" stroke="currentColor">
                              </ServerIcon>
                            </span>
                            Запчасти
                            </Link>
                            <Link to="/consumables" class="focus:text-indigo-300 border-b-2 border-transparent focus:border-white
                          flex px-5 items-center py-6 text-sm leading-5 text-white hover:animate-pulse hover:text-red-200  focus:outline-none transition duration-150 ease-in-out min-w-fit">
                            <span class="mr-2">
                              <ChipIcon width="30" height="30" stroke="currentColor">
                              </ChipIcon>
                            </span>
                            Расходные материалы
                            </Link>
                            <Link to="/userspage" class="focus:text-indigo-300 border-b-2 border-transparent focus:border-white
                          flex px-5 items-center py-6 text-sm leading-5 text-white hover:animate-pulse hover:text-red-200  focus:outline-none transition duration-150 ease-in-out">
                            <span class="mr-2">
                              <UsersIcon width="30" height="30" stroke="currentColor">
                              </UsersIcon>
                            </span>
                            Пользователи
                            </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                        <span className="sr-only">Сообщения</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Открыть меню</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item >
                                  <a>
                                  <button
                                  className='"py-2 px-4  bg-cyan-600 hover:bg-cyan-700  text-white 
                                  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 
                                  focus:ring-offset-2  opacity-90 rounded-lg "' 
                                  onClick = ''>Информация</button>
                                  </a>
                              </Menu.Item>
                              <Menu.Item >
                              <button
                                  className='"py-2 px-4  bg-cyan-600 hover:bg-cyan-700  text-white 
                                  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 
                                  focus:ring-offset-2  opacity-90 rounded-lg "' 
                                  onClick = {signOut}>Выход</button>
                              </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Открыть меню</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                    <Disclosure.Button>

                    </Disclosure.Button>
                  
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">Посмотреть сообщения</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="mt-3 px-2 space-y-1">
                      <Disclosure.Button>
                        <li className="text-blue-200 hover:text-white ml-2 text-lg tracking-wide truncate"><Link to="/">Главная</Link></li>
                        <li className="text-blue-200 hover:text-white ml-2 text-lg tracking-wide truncate"><Link to="/dashboard">Дашборд</Link></li>
                        <li className="text-blue-200 hover:text-white ml-2 text-lg tracking-wide truncate"><Link to="/orders">Менеджер</Link></li>
                        <li className="text-blue-200 hover:text-white ml-2 text-lg tracking-wide truncate"><Link to="/dashboard">Администратор</Link></li>
                      </Disclosure.Button>
                </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}
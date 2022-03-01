import React from 'react';
import { ChevronRightIcon, SearchIcon} from '@heroicons/react/solid'
import PinnedPdf from '../UI/PinnedPdf/Pinned';
import Amp from '../Home/huggy.svg';
import SearchArea from '../UI/SearchArea/Search';
import LeftNav from '../UI/LeftNav/LeftNav';
import PageActions from '../UI/PageTitleActions/PageActions';
import ProjectTable from '../UI/ProjectTable/ProjectTable';


const projects = [
  {
    id: 1,
    title: 'Подготовка выгрузки данных в PDF',
    initials: 'PDF',
    team: 'Поставщики',
    members: [
      {
        name: 'Dries Vincent',
        handle: 'driesvincent',
        imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Lindsay Walton',
        handle: 'lindsaywalton',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Courtney Henry',
        handle: 'courtneyhenry',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Tom Cook',
        handle: 'tomcook',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    totalMembers: 12,
    lastUpdated: 'March 17, 2020',
    pinned: true,
    bgColorClass: 'bg-pink-600',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {

  return (
    <>
      {/* SM only menu test */}
      {/* <TransitionMenu/> */}
      <div className="min-h-full">
        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100">
          <div className="flex items-center flex-shrink-0 px-6">
            <img
              className="flex h-12"
              src={Amp}
              alt="LOGO"
            />
          </div>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="mt-6 h-0 flex-1 flex flex-col overflow-y-auto">
          {/* Sidebar Search */}
          <SearchArea/>
          {/* Navigation */}
          <LeftNav/>
          </div>
        </div>
        {/* Main column */}
        <div className="lg:pl-64 flex flex-col">
          <main className="flex-1">
            {/* Page title & actions */}
            <PageActions/>
            {/* Pinned projects */}
            <PinnedPdf/>
            {/* Projects list (only on smallest breakpoint) */}
            <div className="mt-10 sm:hidden">
              <div className="px-4 sm:px-6">
                <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Проекты</h2>
              </div>
              <ul role="list" className="mt-3 border-t border-gray-200 divide-y divide-gray-100">
                {projects.map((project) => (
                  <li key={project.id}>
                    <a href="#" className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
                      <span className="flex items-center truncate space-x-3">
                        <span
                          className={classNames(project.bgColorClass, 'w-2.5 h-2.5 flex-shrink-0 rounded-full')}
                          aria-hidden="true"
                        />
                        <span className="font-medium truncate text-sm leading-6">
                          {project.title} <span className="truncate font-normal text-gray-500">in {project.team}</span>
                        </span>
                      </span>
                      <ChevronRightIcon
                        className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Projects table (small breakpoint and up) */}
            <ProjectTable/>
          </main>
        </div>
      </div>
    </>
  )
}

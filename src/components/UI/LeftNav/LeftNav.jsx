import React from 'react';
import { ClockIcon, HomeIcon, ViewListIcon,} from '@heroicons/react/outline'


const navigation = [
  { name: 'Главный экран', href: '#', icon: HomeIcon, current: true },
  { name: 'Поставщики', href: '#', icon: ViewListIcon, current: false },
  { name: 'Выгрузка', href: '#', icon: ClockIcon, current: false },
]
const teams = [
  { name: 'Новое', href: '#', bgColorClass: 'bg-red-500' },
  { name: 'Важное', href: '#', bgColorClass: 'bg-green-500' },
  { name: 'Ошибка', href: '#', bgColorClass: 'bg-yellow-500' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function LeftNav() {

  return (
    <>
<nav className="px-3 mt-6">
<div className="space-y-1">
  {navigation.map((item) => (
    <a
      key={item.name}
      href={item.href}
      className={classNames(
        item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
      )}
      aria-current={item.current ? 'page' : undefined}
    >
      <item.icon
        className={classNames(
          item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
          'mr-3 flex-shrink-0 h-6 w-6'
        )}
        aria-hidden="true"
      />
      {item.name}
    </a>
  ))}
</div>
<div className="mt-8">
  {/* Secondary navigation */}
  <h3
    className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
    id="desktop-teams-headline"
  >
    Статус
  </h3>
  <div className="mt-1 space-y-1" role="group" aria-labelledby="desktop-teams-headline">
    {teams.map((team) => (
      <a
        key={team.name}
        href={team.href}
        className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
      >
        <span
          className={classNames(team.bgColorClass, 'w-2.5 h-2.5 mr-4 rounded-full')}
          aria-hidden="true"
        />
        <span className="truncate">{team.name}</span>
      </a>
    ))}
  </div>
</div>
</nav>
</>
)}
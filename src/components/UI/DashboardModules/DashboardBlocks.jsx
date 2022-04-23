import React from 'react';
import {
  XIcon,
  CodeIcon,
  ChartBarIcon,
} from '@heroicons/react/outline';

export default function DashboardBlocks() {
  return (
    <div className="pl-2 flex justify-between">
      <div className="pr-12 pl-8 min-w-64 w-72">
        <div className="bg-white rounded-3xl border shadow-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <CodeIcon className="w-10 h-10 text-red-900" />
            <div>
              <span className="font-bold text-green-500">+ 6 (15%)</span>
              <br />
              <span className="font-medium text-xs text-gray-500 flex justify-end">изменения</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-gray-400">Оборудование</h3>
            <h1 className="font-semibold text-xl text-gray-700">48 едениц</h1>
          </div>
        </div>
      </div>

      <div className="pr-12 pl-8 min-w-64 w-80">
        <div className="bg-white rounded-3xl border shadow-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <ChartBarIcon className="w-10 h-10 text-red-900" />
            <div>
              <span className="font-bold text-green-500">+ 44 (15%)</span>
              <br />
              <span className="font-medium text-xs text-gray-500 flex justify-end">изменения</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-gray-400">Расходные материалы</h3>
            <h1 className="font-semibold text-xl text-gray-700">234 еденицы</h1>
          </div>
        </div>
      </div>

      <div className="pr-12 pl-8 min-w-64 w-72">
        <div className="bg-white rounded-3xl border shadow-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <XIcon className="w-10 h-10 text-red-900" />
            <div>
              <span className="font-bold text-green-500">+ 4 (15%)</span>
              <br />
              <span className="font-medium text-xs text-gray-500 flex justify-end">изменения</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-gray-400">Выгрузки</h3>
            <h1 className="font-semibold text-xl text-gray-700">12 штук</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

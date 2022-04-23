import React from 'react';
import Search from '../../Smartsearch/Search';
import DashboardUsers from '../../UI/DashboardModules/DashBoardUsers';

export default function Dash() {
  return (
    <div className="flex justify-between pr-20" id="main">
      <div className="flex flex-col justify-start w-full min-w-500 mt-[-28px]">
        <Search />
      </div>
      <div className="flex">
        <div className="flex basis-1/2"><DashboardUsers /></div>
      </div>
    </div>
  );
}

import React from 'react'
import Search from '../../Smartsearch/Search'
import DashboardBlocks from '../../UI/DashboardModules/DashboardBlocks'
import DashboardUsers from '../../UI/DashboardModules/DashBoardUsers'
export default function Dash() {
  return (
    <>
    <div className='flex justify-between pr-20' id="main">
        <div className='flex flex-col justify-start'>
            <div className=''><DashboardBlocks/></div>
            <div className='pl-4'> <Search/></div>
            {/* <div className=''><DashBoardProductTable/></div> */}
        </div>
        <div className='flex'>
            <div className='flex basis-1/2'><DashboardUsers/></div>
            {/* <div className='pl-4 flex basis-1/2 justify-end'><DashboardActivity/></div> */}
        </div>
        </div>
    </>
  )
}

import React from 'react';
import { useState } from 'react'
import WebRoutes from '../Routes/Webroutes';
import Header from '../UI/Header/Header';
import DashboardHeader from '../UI/DashboardHeader/DashboardHeader';


export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <>
       <div className>
    <Header/>
          <main className="pb-4 flex-1 justify-start lex-row ">
    <DashboardHeader/>
          </main>
     </div>    
      <WebRoutes></WebRoutes>

    </>
  )
}

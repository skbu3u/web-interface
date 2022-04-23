import React from 'react';
import WebRoutes from '../Routes/Webroutes';
import Header from '../UI/Header/Header';
import DashboardHeader from '../UI/DashboardHeader/DashboardHeader';

export default function Layout() {
  return (
    <>
      <div>
        <Header />
        <main className="pb-4 flex-1 justify-start">
          <DashboardHeader />
        </main>
      </div>
      <WebRoutes />

    </>
  );
}

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dash from '../Pages/Dashboard/Dash';
import ManagerPage from '../Pages/Manager/ManagerPage';
import ConsumablesPage from '../Pages/Сonsumables/ConsumablesPage';
import UsersPage from '../Pages/Users/UsersPage';
import EquipmentsPage from '../Pages/Equipments/EquipmentsPage';
import PartsPage from '../Pages/Parts/PartsPage';

function WebRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Dash />} />
      <Route exact path="/dashboard" element={<Dash />} />
      <Route exact path="/equipments" element={<EquipmentsPage />} />
      <Route exact path="/consumables" element={<ConsumablesPage />} />
      <Route exact path="/managerpage" element={<ManagerPage />} />
      <Route exact path="/userspage" element={<UsersPage />} />
      <Route exact path="/partspage" element={<PartsPage />} />
    </Routes>
  );
}

export default WebRoutes;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '../Layout/DefaultLayout';
import { publicRoute } from './route';

const ProjectRoute = () => {
  return (
    <Routes>
      {publicRoute.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            <DefaultLayout>
              <route.component />
            </DefaultLayout>
          }
        />
      ))}
    </Routes>
  );
};

export default ProjectRoute;

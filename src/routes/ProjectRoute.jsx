import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '../Layout/DefaultLayout';
import NotFound from '../Pages/NotFound/NotFound';
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
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default ProjectRoute;

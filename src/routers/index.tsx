import React from 'react';
import fp from 'lodash/fp';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Dashboard, Test } from 'pages';

const Routers: React.FC = () => {
  let baseRouteUrl = '/';
  if (window.location.pathname.includes(`en-US`)) {
    baseRouteUrl = '/en-US/';
  } else if (window.location.pathname.includes(`ko-KR`)) {
    baseRouteUrl = '/';
  }

  const menu = [
    {
      path: `${baseRouteUrl}test`,
      component: <Test />,
    },
    {
      path: `${baseRouteUrl}`,
      component: <Dashboard />,
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        {fp.map(
          item => (
            <Route
              key={fp.pipe(fp.get(`component`), fp.toString)(item)}
              path={fp.get('path', item)}
              element={fp.get('component', item)}
            />
          ),
          menu,
        )}
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;

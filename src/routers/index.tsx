import React from 'react';
import fp from 'lodash/fp';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {
  DashboardPage1,
  DashboardPage2,
  TestFirst,
  TestSecond,
  Empty,
  Error,
} from 'pages';
import { ErrorBoundary } from 'react-error-boundary';
import SigninPage from 'pages/Signin';

const Routers: React.FC = () => {
  let baseRouteUrl = '/';
  if (window.location.pathname.includes(`en-US`)) {
    baseRouteUrl = '/en-US/';
  } else if (window.location.pathname.includes(`ko-KR`)) {
    baseRouteUrl = '/';
  }

  const menu = [
    {
      path: `${baseRouteUrl}dashboard/page1`,
      component: <DashboardPage1 />,
    },
    {
      path: `${baseRouteUrl}dashboard/page2`,
      component: <DashboardPage2 />,
    },
    {
      path: `${baseRouteUrl}test/first`,
      component: <TestFirst />,
    },
    {
      path: `${baseRouteUrl}test/second`,
      component: <TestSecond />,
    },
    {
      path: `${baseRouteUrl}test`,
      component: <TestFirst />,
    },
    {
      path: `${baseRouteUrl}empty`,
      component: <Empty />,
    },
    {
      path: `${baseRouteUrl}signin`,
      component: <SigninPage />,
    },
    {
      path: `${baseRouteUrl}`,
      component: <DashboardPage1 />,
    },
  ];
  return (
    <ErrorBoundary
      FallbackComponent={Error}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
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
    </ErrorBoundary>
  );
};
export default Routers;

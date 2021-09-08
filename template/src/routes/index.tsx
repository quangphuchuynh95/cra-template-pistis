import React, { FunctionComponent, Suspense } from 'react';
import {
  Switch, Redirect,
} from 'react-router-dom';
import LoadingPanel from '../components/loading-panel';
import { DefaultLayout } from '../components/layout';
import RouteWithLayout from '../components/route-with-layout';
import { RouteWithTemplateProps } from '../components/route-with-layout/route-with-layout';

const Home = React.lazy(() => import('./home'));

const routes: RouteWithTemplateProps[] = [
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    component: Home,
  },
  // {
  //   path: '/login',
  //   exact: true,
  //   layout: AuthenticationLayout,
  //   component: Login,
  // },
  // {
  //   path: '/register',
  //   exact: true,
  //   layout: AuthenticationLayout,
  //   component: Register,
  // },
]

const Routes: FunctionComponent = () => (
  <Suspense fallback={<LoadingPanel />}>
    <Switch>
      {
        routes.map((props, index) => (
          <RouteWithLayout key={index} {...props} />
        ))
      }
      <Redirect to="/" />
    </Switch>
  </Suspense>
)

Routes.displayName = 'Routes';

export default Routes;

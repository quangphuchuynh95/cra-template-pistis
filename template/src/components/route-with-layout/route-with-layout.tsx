import React, { ComponentType, FunctionComponent } from 'react';
import { RouteProps } from 'react-router';
import { Route } from 'react-router-dom';

export type RouteWithTemplateProps = RouteProps & { layout?: ComponentType, component: ComponentType }

export const RouteWithLayout: FunctionComponent<RouteWithTemplateProps> = ({
  layout: Layout = React.Fragment,
  component: Component,
  ...props
}) => (
  <Route
    {...props}
    render={(props: any) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
)

RouteWithLayout.displayName = 'RouteWithLayout'

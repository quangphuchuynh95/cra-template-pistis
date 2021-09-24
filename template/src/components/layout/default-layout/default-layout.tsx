import React, { FunctionComponent } from 'react';
import { AppBar } from '@mui/material';

interface DefaultLayoutProps {

}

export const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({
  children,
}) => (
  <div>
    <AppBar position="static">
      Header
    </AppBar>
    <div>
      {children}
    </div>
  </div>
)

DefaultLayout.displayName = 'DefaultLayout'

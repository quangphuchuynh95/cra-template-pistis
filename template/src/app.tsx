import React, { FunctionComponent, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';
import { CssBaseline } from '@material-ui/core';
import Routes from './routes';
import { createTheme } from './theme';

const App: FunctionComponent = () => {
  const theme = useMemo(
    () => createTheme('light'),
    [],
  )

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

App.displayName = 'App'

export default App;

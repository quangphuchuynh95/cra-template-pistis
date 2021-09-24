import React, { FunctionComponent, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';
import { CssBaseline } from '@mui/material';
import Routes from './routes';
import { createTheme } from './theme';


const App: FunctionComponent = () => {
  const theme = useMemo(
    () => createTheme('light'),
    [],
  )

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}

App.displayName = 'App'

export default App;

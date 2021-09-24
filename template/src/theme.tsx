import { createTheme as createMuiTheme } from '@mui/material/styles';

export const createTheme = (mode: 'dark' | 'light') => createMuiTheme({
  palette: {
    mode,
  },
});

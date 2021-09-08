import { createTheme as createMuiTheme } from '@material-ui/core/styles';

export const createTheme = (mode: 'dark' | 'light') => createMuiTheme({
  palette: {
    type: mode,
  },
});

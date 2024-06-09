import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#800020',
    },
    secondary: {
      main: '#000000',
    },
  },
  typography: {
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export default theme;

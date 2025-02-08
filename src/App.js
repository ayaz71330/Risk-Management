import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Index from './components/Index';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#0a1929',
      paper: '#132f4c',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Index />
    </ThemeProvider>
  );
};

export default App;
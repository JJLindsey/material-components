
import './App.css';
import Header from './components/Header';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './components/UI/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      Hey!!
    </ThemeProvider>

  );
}

export default App;

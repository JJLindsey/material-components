import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './components/UI/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
            <Switch>
              <Route exact path="/" component={() => <div>Home</div>} />
              <Route exact path="/services" component={() => <div>Services</div>} />
              <Route exact path="/about" component={() => <div>About</div>} />
              <Route exact path="/contact" component={() => <div>Contact</div>} />
              <Route exact path="/estimate" component={() => <div>Estimate</div>} />
            </Switch>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;

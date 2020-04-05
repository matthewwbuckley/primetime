import React, { createContext, useReducer } from 'react';
import './App.css';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import reducer from './store/reducer';

import PrimeDisplay from './compositions/PrimeDisplay';

function App() {
  const [appState, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <DispatchContext.Provider value={dispatch}>
        <StoreContext.Provider value={appState}>
          <ThemeProvider theme={theme}>
            <PrimeDisplay />
          </ThemeProvider>
        </StoreContext.Provider>
      </DispatchContext.Provider>
    </div>
  );
}

export const DispatchContext = createContext(null);
export const StoreContext = createContext(null);

const initialState = {
  page: 1,
  primes: [],
  max: 0,
  primesRequested: false,
  pageRequested: false,
  lastPage: 1,
};

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#fbc99d',
    },
    secondary: {
      main: '#fff6da',
    },
    error: {
      main: '#ed1250',
    },
  },
});

export default App;

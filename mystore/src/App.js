import { createContext, useReducer } from 'react';
import './App.css';
import { Index } from './components/Index';
import { initialState, reducer } from './reducer/useReducer';

export const userContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <userContext.Provider value={{ state, dispatch }}>
      <Index />
    </userContext.Provider>
  );
}

export default App;

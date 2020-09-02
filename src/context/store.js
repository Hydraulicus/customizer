import React, { useReducer } from 'react';

import initialState from './initialState';

import AppContext from './appContext';
import reducer from './reducer';


const StateProvider = ({ children, ...props }) => {
  const { Provider, } = AppContext;
  const [state, dispatch] = useReducer(reducer, { ...initialState, ...props, });

  console.log('StateProvider props=', props);

  return (
    <Provider value={{
      state,
      dispatch,
    }}>{children}</Provider>
  );
};

export default StateProvider;

import React from 'react';

import initialState from './initialState';

const appContext = React.createContext(
  initialState
);

export default appContext;

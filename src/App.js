import React, { useState } from 'react';
import {
  DesignConstructor,
  handlers,
  Canvas
} from './components';

function App() {
  const canvasRef = React.createRef();

  // React.useEffect( () => {
  //     console.log('useEffect canvasRef = ', canvasRef)
  //   }, [canvasRef]
  // );

  return (
    <React.Fragment>
      <Canvas ref={canvasRef} />
      <DesignConstructor canvasRef={canvasRef} handlers={handlers} />
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import { Canvas } from './components';

function designAreaConstructor({canvasRef}) {
  // return function (props) {
  //   return
  // }

  // const canvasRef = React.createRef();

  return <Canvas ref={canvasRef} />

}

export default designAreaConstructor;

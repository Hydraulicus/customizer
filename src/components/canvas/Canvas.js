import React, { useEffect } from 'react';

const Canvas = React.forwardRef((props, ref) => {

  React.useEffect( () => {
      console.log('RERENDER! useEffect CANVAS ref = ', ref)
    },
  );

  return (
      <canvas
        id={`canvas-${Math.random()}`}
        width="1440"
        height="1440"
        style={{width: '720px', height: '720px', border: '#f00 2px solid'}}
        ref={ref}
      />
    )
  }
);

export default Canvas;

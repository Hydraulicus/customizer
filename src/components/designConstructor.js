import React, { useState, useEffect } from 'react';

function DesignConstructor({ canvasRef, handlers, }) {
  const [counter, setCounter] = useState(0);
  const [ctx, setCtx] = useState(null);

  // console.log('DesignConstructor handlers = ', handlers);

  useEffect( () => {
      const ctx = canvasRef.current.getContext('2d');
      setCtx(ctx);
    }, [canvasRef]
  );

  useEffect( () => {
      if (!ctx) return;
      ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
      handlers.text.textDraw({ ctx, text: counter, });
    }, [counter]
  );

  return (
    <React.Fragment>
      <button onClick={ () => { setCounter(counter + 1) } } >Incr</button>
      <button onClick={ () => { setCounter(counter - 1) } } >Decr</button>
    </React.Fragment>
  )


}

export default DesignConstructor;

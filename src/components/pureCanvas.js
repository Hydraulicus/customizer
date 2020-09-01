import React from 'react';

function pureCanvas() {
  return (
    <canvas
      width="300"
      height="300"
      // ref={(node) => (node ? this.props.contextRef(node.getContext('2d')) : null)}
    />
  );
}

export default pureCanvas;

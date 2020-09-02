import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import designAreaConstructor from './../../designAreaConstructor';
import {StateProvider} from './../../context';
import {DesignConstructor, handlers} from "../index";

function DesignBlock({ template, }) {
  const canvasRef = React.createRef();

  // React.useEffect( () => {
  //     console.log('useEffect canvasRef = ', canvasRef)
  //   }, [canvasRef]
  // );

  return (
    <Fragment>
      <CssBaseline />
      <StateProvider props={{someProp: 'someProp'}}>
      <Container maxWidth="lg">
          <Grid item xs={8} id="designArea">
            {/*<Canvas ref={canvasRef} />*/}
            {designAreaConstructor({canvasRef})}
          </Grid>
          <Grid item xs={4}>
            <DesignConstructor canvasRef={canvasRef} handlers={handlers} />
          </Grid>
      </Container>
      </StateProvider>
    </Fragment>
  );
}

export default DesignBlock;

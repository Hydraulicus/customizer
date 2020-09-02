import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DesignBlock from './components/layout/designBlock';
import designAreaConstructor from './designAreaConstructor';
import {StateProvider as withGlobalState} from './context';

import {
  DesignConstructor,
  handlers,
  Canvas
} from './components';

function App() {
  // const canvasRef = React.createRef();

  // React.useEffect( () => {
  //     console.log('useEffect canvasRef = ', canvasRef)
  //   }, [canvasRef]
  // );

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper>Here will be templates</Paper>
          </Grid>
          <DesignBlock template={{}} />
          {/*<Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />*/}
          {/*<Grid item xs={8} id="designArea">*/}
          {/*  /!*<Canvas ref={canvasRef} />*!/*/}
          {/*  {designAreaConstructor}*/}
          {/*</Grid>*/}
          {/*<Grid item xs={4}>*/}
          {/*  <DesignConstructor canvasRef={canvasRef} handlers={handlers} />*/}
          {/*</Grid>*/}
        </Grid>
      </Container>
    </Fragment>
  );
}

// export default withGlobalState(App);
export default App;

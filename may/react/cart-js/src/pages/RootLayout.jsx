import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      {/* <Grid xs={2}> */}
      <Outlet />

      {/* </Grid> */}
    </>
  );
};

export default RootLayout;

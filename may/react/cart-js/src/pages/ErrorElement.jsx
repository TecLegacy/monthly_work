import { Box } from '@mui/system';
import { blue, purple } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
} from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import RestoreIcon from '@mui/icons-material/Restore';
// import { RestoreIcon, FavoriteIcon } from '@mui/icons-material';

function ErrorElement() {
  return (
    <>
      <Box
        sx={{
          width: 500,
          height: 500,
          backgroundColor: blue[300],
        }}
      >
        <h1>Page you are looking for is not found</h1>

        <Button>
          <Link to='/'>Back To homepage</Link>
        </Button>
      </Box>
      <BottomNavigation
        showLabels
        // value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      >
        <BottomNavigationAction
          sx={{
            color: blue[300],
            '&:hover': {
              backgroundColor: purple[50],
            },
          }}
          label='Recents'
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          sx={{
            color: '#009362',
            '&:hover': {
              backgroundColor: purple[50],
            },
          }}
          label='Favorites'
          icon={<FavoriteIcon />}
        />
        {/* <BottomNavigationAction label='Nearby' icon={<LocationOnIcon />} /> */}
      </BottomNavigation>
    </>
  );
}
export default ErrorElement;

import { styled as muiStyle } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { IMuiAppBarProps } from 'types';

// const drawerWidth = 240;
export const StyledAppBar = muiStyle(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<IMuiAppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // ...(open && {
  //   marginLeft: drawerWidth,
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   transition: theme.transitions.create(['width', 'margin'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // }),
}));

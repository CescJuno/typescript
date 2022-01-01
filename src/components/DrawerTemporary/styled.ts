import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { IMuiDrawerProps, IPaddingProps } from 'types';

const paddingMixin = (paddingM): CSSObject => ({
  padding: paddingM,
});
export const DrawerHeader = styled('div', {
  shouldForwardProp: prop => prop !== 'paddingM',
})<IPaddingProps>(({ theme, paddingM }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  [theme.breakpoints.down('sm')]: {
    ...(paddingM !== undefined && paddingMixin(paddingM)),
  },
}));
export const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open',
})<IMuiDrawerProps>(({ theme, open, anchor, variant }) => ({}));

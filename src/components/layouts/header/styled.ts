import { styled } from '@mui/material/styles';
import { IThemeColor } from 'types';

export const StyledHeader = styled('header')<IThemeColor>(({ theme, themeColor }) => ({
  background: theme.palette.background.paper,
  borderBottom: `1px solid ${theme.palette.divider}`,
  ...(themeColor !== undefined && {
    background: themeColor,
    borderBottom: `1px solid transparent`,
  }),
  position: `fixed`,
  top: `0px`,
  width: `100%`,
  zIndex: 9,
}));

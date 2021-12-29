import { styled } from '@mui/material/styles';

export const StyledHeaderTop = styled('div')(({ theme }) => ({
  display: 'flex',
  width: `100%`,
  margin: `0px auto`,
  maxWidth: theme.breakpoints.values.lg,
  justifyContent: `end`,
  background: theme.palette.background.paper,
}));

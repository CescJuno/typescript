import defaultTheme from 'styles/theme';

type MyTheme = typeof defaultTheme;
declare module '@mui/material/styles' {
  export interface Theme extends MyTheme {}
}

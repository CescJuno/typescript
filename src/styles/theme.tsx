import { createTheme } from '@mui/material/styles';
import {
  red,
  green,
  yellow,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  cyan,
  teal,
  lime,
  amber,
  orange,
  deepOrange,
  brown,
  blueGrey,
} from '@mui/material/colors';
import { PaletteMode } from '@mui/material';
import { Theme } from '@emotion/react';

type ITheme = Theme;
const myTheme: ITheme = {
  breakpoints: {
    values: {
      xs: 361,
      sm: 601,
      md: 961,
      lg: 1281,
      xl: 1921,
    },
  },
  palette: {
    mode: 'light',
    background: {
      default: '#f3f4f8',
      paper: '#ffffff',
    },
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    default: {
      900: '#000000',
      800: '#303637',
      700: '#53575d',
      600: '#666a71',
      500: '#91959a',
      400: '#b1b5ba',
      300: '#d5d9de',
      200: '#e4e9ee',
      100: '#f1f4f6',
      50: '#f6f8f9',
      main: '#c3cbd4',
      contrastText: '#ffffff',
    },
    primary: {
      900: '#00858d',
      800: '#057f86',
      700: '#04939d',
      600: '#00a8b6',
      500: '#00b8c9',
      400: '#27c2cf',
      300: '#4ccdd7',
      200: '#7fdce2',
      100: '#b1eaed',
      50: '#dff6f8',
      main: '#04939d',
      contrastText: '#ffffff',
    },
    secondary: {
      900: '#162b33',
      800: '#263f49',
      700: '#33525e',
      600: '#416573',
      500: '#4c7484',
      400: '#668896',
      300: '#809daa',
      200: '#a2b9c3',
      100: '#c4d6dd',
      50: '#e4eff5',
      main: '#33525e',
      contrastText: '#ffffff',
    },
    success: {
      900: '#085600',
      800: '#0f7600',
      700: '#218701',
      600: '#2e9812',
      500: '#2e9812',
      400: '#81c170',
      300: '#abd6a0',
      200: '#bfdfb6',
      100: '#d4eace',
      50: '#e8f4e6',
      main: '#2e9812',
      contrastText: '#ffffff',
    },
    warning: {
      900: '#cc4100',
      800: '#dc5f00',
      700: '#ee7b00',
      600: '#f57f00',
      500: '#f57f00',
      400: '#f8b265',
      300: '#fbcc99',
      200: '#fbd8b1',
      100: '#fce5cb',
      50: '#fdf1e4',
      main: '#f57f00',
      contrastText: '#ffffff',
    },
    info: {
      900: '#b21a04',
      800: '#c82b06',
      700: '#e13a11',
      600: '#ef4016',
      500: '#ef4016',
      400: '#f58c72',
      300: '#f9b2a1',
      200: '#fac4b8',
      100: '#fbd8cf',
      50: '#fdeae6',
      main: '#ed4040',
      contrastText: '#ffffff',
    },
    error: {
      900: '#b21a04',
      800: '#c82b06',
      700: '#e13a11',
      600: '#ef4016',
      500: '#ef4016',
      400: '#f58c72',
      300: '#f9b2a1',
      200: '#fac4b8',
      100: '#fbd8cf',
      50: '#fdeae6',
      main: '#ed4040',
      contrastText: '#ffffff',
    },
    grey: {
      900: '#000000',
      800: '#35393e',
      700: '#53575d',
      600: '#878d94',
      500: '#91959a',
      400: '#b1b5ba',
      300: '#d5d9de',
      200: '#e4e9ee',
      100: '#f1f4f6',
      50: '#f6f8f9',
    },
    red: {
      ...red,
      main: red[500],
      light: red[200],
      dark: red[700],
      contrastText: '#ffffff',
    },
    blue: {
      ...blue,
      main: blue[500],
      light: blue[200],
      dark: blue[700],
      contrastText: '#ffffff',
    },
    green: {
      ...green,
      main: green[500],
      light: green[200],
      dark: green[700],
      contrastText: '#ffffff',
    },
    yellow: {
      ...yellow,
      main: yellow[500],
      light: yellow[200],
      dark: yellow[700],
      contrastText: '#ffffff',
    },
    pink: {
      ...pink,
      main: pink[500],
      light: pink[200],
      dark: pink[700],
      contrastText: '#ffffff',
    },
    brown: {
      ...brown,
      main: brown[500],
      light: brown[200],
      dark: brown[700],
      contrastText: '#ffffff',
    },
    orange: {
      ...orange,
      main: orange[500],
      light: orange[200],
      dark: orange[700],
      contrastText: '#ffffff',
    },
    text: {
      primary: '#101717',
      secondary: '#55595e',
      disabled: '#B1B5BA',
    },
    divider: '#d5d9de',
  },
  mixins: {
    toolbar: {
      minHeight: '56',
      '@media (min-width: 600px)': {
        minHeight: 56,
      },
    },
  },
  typography: {
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Malgun Gothic", "Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";',
  },
};
const theme = createTheme(myTheme);

export default theme;

import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import { styled as muiStyle } from '@mui/material/styles';
import { IButtonProps } from 'types';

type ExpendedButtonProps = MuiButtonProps & IButtonProps;
export const StyledButton = muiStyle(MuiButton)<ExpendedButtonProps>(
  ({ theme, variant, color, customcolor, size }) => ({
    height: `38px`,
    display: `flex`,
    alignItems: `center`,
    fontSize: `0.8125rem`,
    lineHeight: 1,
    boxShadow: `none`,
    ...(color !== undefined && {
      '& > span > span': {
        backgroundColor:
          variant === `outlined`
            ? theme.palette[color].main
            : variant === `contained`
            ? theme.palette.common.white
            : `inherit`,
      },
    }),
    ...(customcolor !== undefined && {
      '& > span > span': {
        backgroundColor:
          variant === `outlined`
            ? theme.palette[customcolor].main
            : variant === `contained`
            ? theme.palette.common.white
            : `inherit`,
      },
    }),
    ...(color !== undefined &&
      color !== `inherit` &&
      variant === `outlined` && {
        color: theme.palette[color].main,
        borderColor: theme.palette[color].main,
        '&:hover': {
          backgroundColor: theme.palette[color].light,
          borderColor: theme.palette[color].main,
        },
        '&:active': {
          backgroundColor: theme.palette[color].dark,
          borderColor: theme.palette[color].main,
        },
        '&:disabled': {
          backgroundColor: theme.palette.grey[200],
        },
      }),
    ...(color !== undefined &&
      color !== `inherit` &&
      variant === `contained` && {
        color: theme.palette[color].contrastText,
        borderColor: theme.palette[color].main,
        backgroundColor: theme.palette[color].main,
        '&:hover': {
          backgroundColor: theme.palette[color].light,
        },
        '&:active': {
          backgroundColor: theme.palette[color].dark,
        },
        '&:disabled': {
          backgroundColor: theme.palette.grey[200],
        },
      }),
    ...(customcolor !== undefined &&
      variant === `outlined` && {
        color: theme.palette[customcolor].main,
        borderColor: theme.palette[customcolor].main,
        '&:hover': {
          backgroundColor: theme.palette[customcolor].light,
          borderColor: theme.palette[customcolor].main,
        },
        '&:active': {
          backgroundColor: theme.palette[customcolor].dark,
          borderColor: theme.palette[customcolor].main,
        },
        '&:disabled': {
          backgroundColor: theme.palette.grey[200],
        },
      }),
    ...(customcolor !== undefined &&
      variant === `contained` && {
        color: theme.palette[customcolor].contrastText,
        borderColor: theme.palette[customcolor].main,
        backgroundColor: theme.palette[customcolor].main,
        '&:hover': {
          backgroundColor: theme.palette[customcolor].light,
        },
        '&:active': {
          backgroundColor: theme.palette[customcolor].dark,
        },
        '&:disabled': {
          backgroundColor: theme.palette.grey[200],
        },
      }),
    ...(size === `small` && {
      height: `32px`,
      fontSize: `0.75rem`,
    }),
    ...(size === `large` && {
      height: `44px`,
      fontSize: `1rem`,
    }),
  }),
);

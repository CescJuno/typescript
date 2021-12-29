import { FC } from 'react';
import { ButtonProps } from '@mui/material/Button';
import { ScaleLoader } from 'react-spinners';
import { IButtonProps } from 'types';
import { StyledButton } from './styled';

type ExtendedButtonProps = ButtonProps & IButtonProps;
const Button: FC<ExtendedButtonProps> = ({
  children,
  color,
  customcolor,
  variant,
  size,
  fullWidth,
  disabled,
  startIcon,
  endIcon,
  loading,
  onClick,
}) => {
  return (
    <StyledButton
      color={color}
      customcolor={customcolor}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {loading ? <ScaleLoader width={1.5} height={10} margin={1} /> : children}
    </StyledButton>
  );
};

Button.defaultProps = {
  children: '',
  color: 'inherit',
  customcolor: undefined,
  variant: 'text',
  size: 'medium',
  fullWidth: false,
  loading: false,
  disabled: false,
};

export default Button;

import { SvgIconTypeMap } from '@mui/material';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';
import { OverridableComponent } from '@mui/material/OverridableComponent';

type ThemeColor = '' | undefined;
type List = Array<string> | undefined;
type CustomColor =
  | 'red'
  | 'green'
  | 'blue'
  | 'yellow'
  | 'pink'
  | 'orange'
  | 'brown'
  | undefined;

interface ISubMenuProps {
  label: string;
  link: string;
  icon?: OverridableComponent<SvgIconTypeMap> & { muiName: string };
}
export interface IPaddingProps {
  paddingM?: string;
}
export interface IMenuProps {
  title: string;
  pageTitle?: string;
  icon?: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  link?: string;
  subMenu?: ISubMenuProps[];
}
export interface IMuiDrawerProps extends MuiDrawerProps {
  open?: boolean;
  menu?: IMenuProps[] | undefined;
  activeMenu?: string;
  handleMenuAction?: any;
  handleDrawerToggle?: any;
  handleDrawerOpen?: any;
  handleDrawerClose?: any;
}
export interface IMuiAppBarProps extends MuiAppBarProps {
  title?: string;
  open?: boolean;
  handleLeftMenu?: any;
}
export interface IThemeColor {
  themeColor?: ThemeColor;
}
export interface IReactHelmetProps {
  lang?: string;
  type?: string;
  canonical?: string;
  themeColor?: string;
  width?: string;
  height?: string;
  image?: string;
  robots?: string;
  keywords?: string;
  description?: string;
  title?: string;
  favicon?: string;
  viewport?: string;
}

export interface IButtonProps {
  children: React.ReactNode;
  customcolor?: CustomColor;
  loading?: boolean;
}

import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';

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

interface SubMenu {
  label: string;
  link: string;
}
interface Menu {
  title: string;
  subMenu: SubMenu[];
}
export interface IMuiDrawerProps extends MuiDrawerProps {
  open?: boolean;
  menu?: Menu[] | undefined;
  drawerWidth?: number;
  handleMenuAction?: any;
}
export interface IMuiAppBarProps extends MuiAppBarProps {
  title?: string;
  open?: boolean;
  drawerWidth?: number;
  handleLeftMenu?: any;
}
export interface IThemeColor {
  themeColor?: ThemeColor;
}
export interface HeaderProps {
  title: string;
  topMenu?: List;
}
export interface HeaderTopProps {
  topMenu?: List;
}
export interface ReactHelmetProps {
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

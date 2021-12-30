import { useState } from 'react';
import {
  Collapse,
  IconButton,
  useTheme,
  ListItemButton,
  ListItem,
  List,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';
import { IMuiDrawerProps } from 'types';
import fp from 'lodash/fp';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import { DrawerHeader, StyledDrawer } from './styled';

const MuiDrawer: React.FC<IMuiDrawerProps> = ({
  open,
  menu,
  anchor,
  variant,
  handleDrawerOpen,
  handleDrawerClose,
  handleDrawerToggle,
  handleMenuAction,
}) => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <StyledDrawer
      variant={variant}
      open={open}
      anchor={anchor}
      onMouseEnter={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerToggle}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        sx={{ p: `0` }}
      >
        {!fp.isEmpty(menu) &&
          fp.map.convert({ cap: false })(
            (elem, index) => (
              <>
                <ListItemButton
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    if (fp.isEmpty(elem.subMenu)) handleMenuAction(elem.link);
                  }}
                >
                  <ListItemIcon>{<elem.icon />}</ListItemIcon>
                  <ListItemText primary={elem.title} />
                </ListItemButton>
                <Divider />
                {!fp.isEmpty(elem.subMenu) &&
                  fp.map(
                    item => (
                      <ListItemButton
                        onClick={() => handleMenuAction(item.link)}
                      >
                        <ListItemIcon>{<item.icon />}</ListItemIcon>
                        <ListItemText primary={item.label} />
                        <Divider />
                      </ListItemButton>
                    ),
                    elem.subMenu,
                  )}
              </>
            ),
            menu,
          )}
      </List>
    </StyledDrawer>
  );
};
MuiDrawer.defaultProps = {
  open: false,
  anchor: undefined,
  menu: [],
  handleMenuAction: null,
  handleDrawerToggle: null,
};
export default MuiDrawer;

import { useState } from 'react';
import { IconButton, useTheme, ListItemButton, List } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { IMuiDrawerProps } from 'types';
import fp from 'lodash/fp';
import { DrawerHeader, StyledDrawer } from './styled';

const MuiDrawer: React.FC<IMuiDrawerProps> = ({
  open,
  menu,
  activeMenu,
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
              <div key={index}>
                <ListItemButton
                  onClick={() => {
                    setActiveIndex(index);
                    if (fp.isEmpty(elem.subMenu)) handleMenuAction(elem.link);
                  }}
                >
                  <ListItemIcon>{<elem.icon />}</ListItemIcon>
                  <ListItemText
                    primary={elem.title}
                    style={{
                      color:
                        activeMenu === elem.title
                          ? theme.palette.primary.main
                          : ``,
                    }}
                  />
                </ListItemButton>
                <Divider />
                {!fp.isEmpty(elem.subMenu) &&
                  fp.map.convert({ cap: false })(
                    (item, idx) => (
                      <ListItemButton
                        key={idx}
                        onClick={() => handleMenuAction(item.link)}
                        style={{
                          color:
                            activeMenu === item.label
                              ? theme.palette.primary.main
                              : ``,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            color:
                              activeMenu === item.label
                                ? theme.palette.primary.main
                                : ``,
                          }}
                        >
                          {<item.icon />}
                        </ListItemIcon>
                        <ListItemText primary={item.label} />
                        <Divider />
                      </ListItemButton>
                    ),
                    elem.subMenu,
                  )}
              </div>
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
  activeMenu: ``,
  handleMenuAction: null,
  handleDrawerToggle: null,
};
export default MuiDrawer;

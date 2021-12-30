import { useState } from 'react';
import {
  Collapse,
  IconButton,
  useTheme,
  ListItemButton,
  ListItem,
  List,
  Drawer,
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
import { DrawerHeader } from './styled';

const TemporaryDrawer: React.FC<IMuiDrawerProps> = ({
  open,
  menu,
  anchor,
  variant,
  handleDrawerClose,
  handleMenuAction,
}) => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <Drawer
      variant={variant}
      open={open}
      anchor={anchor}
      onClose={handleDrawerClose}
    >
      <DrawerHeader paddingM={`44px 0 0`} />
      <List component="nav" aria-labelledby="nested-list-subheader">
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
                  {fp.isEmpty(elem.subMenu) ? (
                    ``
                  ) : index === activeIndex ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </ListItemButton>
                <Divider />
                {index === activeIndex &&
                  !fp.isEmpty(elem.subMenu) &&
                  fp.map(
                    item => (
                      <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <ListItemButton
                            sx={{ pl: 4 }}
                            onClick={() => handleMenuAction(item.link)}
                          >
                            <ListItemIcon>{<item.icon />}</ListItemIcon>
                            <ListItemText primary={item.label} />
                          </ListItemButton>
                        </List>
                        <Divider />
                      </Collapse>
                    ),
                    elem.subMenu,
                  )}
              </>
            ),
            menu,
          )}
      </List>
    </Drawer>
  );
};
TemporaryDrawer.defaultProps = {
  open: false,
  anchor: undefined,
  menu: [],
  handleMenuAction: null,
  handleDrawerToggle: null,
};
export default TemporaryDrawer;

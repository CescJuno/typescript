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
  variant,
  handleDrawerToggle,
  handleMenuAction,
}) => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <StyledDrawer variant={variant} open={open}>
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
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
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
                            <ListItemIcon>
                              <StarBorder />
                            </ListItemIcon>
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
    </StyledDrawer>
  );
};
MuiDrawer.defaultProps = {
  open: false,
  menu: [],
  handleMenuAction: null,
  handleDrawerToggle: null,
};
export default MuiDrawer;

import { useCallback, useState } from 'react';
import fp from 'lodash/fp';
import { Box, Divider, Drawer, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import MenuAppBar from 'components/AppBar';
import MuiDrawer from 'components/Drawer';
import TemporaryDrawer from 'components/DrawerTemporary';
import { DrawerHeader } from 'components/Drawer/styled';
import handleLinkClick from 'utils/linkHandler';
import useMenu from 'utils/useMenu';
import { IMenuProps } from 'types';

const TestSecondContainer: React.FC<IMenuProps> = ({ title, pageTitle }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [listMenuOpen, setListMenuOpen] = useState(false);
  const menu = useMenu(title);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleMenuAction = useCallback(link => {
    handleLinkClick(link, navigate);
  }, []);
  return (
    <Box sx={{ display: 'flex' }}>
      <MenuAppBar
        title={`Juno Console`}
        position={`fixed`}
        open={listMenuOpen}
        handleLeftMenu={() => setListMenuOpen(!listMenuOpen)}
      />
      <TemporaryDrawer
        anchor={`left`}
        variant={'temporary'}
        open={listMenuOpen}
        menu={menu}
        handleDrawerClose={() => setListMenuOpen(false)}
        handleMenuAction={handleMenuAction}
      />
      <MuiDrawer
        variant={`permanent`}
        open={open}
        menu={fp.filter(elem => elem.title === title, menu)}
        handleDrawerToggle={handleDrawerToggle}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        handleMenuAction={handleMenuAction}
      />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 0, justifyContent: `flex-start` }}
      >
        <DrawerHeader paddingM={`44px 0 0`} />
        <Box
          component={`div`}
          sx={{
            height: `49px`,
            alignItems: `center`,
            display: `flex`,
            p: `0 16px`,
            backgroundColor: theme.palette.common.white,
          }}
        >
          {pageTitle}
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>aaa</Box>
      </Box>
    </Box>
  );
};
TestSecondContainer.defaultProps = {
  title: ``,
  pageTitle: ``,
};
export default TestSecondContainer;

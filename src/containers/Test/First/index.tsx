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

const TestFirstContainer: React.FC<IMenuProps> = ({ title, pageTitle }) => {
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
        title={`TEST`}
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
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader paddingM={`44px 0 0`} />
        <div>{pageTitle}</div>
        <Divider />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
};
TestFirstContainer.defaultProps = {
  title: ``,
  pageTitle: ``,
};
export default TestFirstContainer;

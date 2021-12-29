import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import MenuAppBar from 'components/AppBar';
import MuiDrawer from 'components/Drawer';
import { DrawerHeader } from 'components/Drawer/styled';
import handleLinkClick from 'utils/linkHandler';

const drawerWidth = 240;

const DashboardContainer: React.FC = () => {
  const theme = useTheme();
  const history = useNavigate();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState([
    {
      title: `first`,
      subMenu: [
        {
          label: `home`,
          link: `/`,
        },
        {
          label: `test`,
          link: `/test`,
        },
      ],
    },
    {
      title: `second`,
      subMenu: [],
    },
  ]);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const handleMenuAction = link => {
    console.log(link);
    handleLinkClick(link, history);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <MenuAppBar
        title={`TEST`}
        position={`fixed`}
        open={open}
        drawerWidth={drawerWidth}
        handleLeftMenu={handleDrawerToggle}
      />
      <MuiDrawer
        variant={`permanent`}
        open={open}
        drawerWidth={drawerWidth}
        menu={menu}
        handleMenuAction={handleMenuAction}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <div>home</div>
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
export default DashboardContainer;

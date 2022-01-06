import {
  Box,
  Divider,
  Drawer,
  getCircularProgressUtilityClass,
  Typography,
} from '@mui/material';
import fp from 'lodash/fp';
import { useState, useCallback, useEffect, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import MenuAppBar from 'components/AppBar';
import MuiDrawer from 'components/Drawer';
import TemporaryDrawer from 'components/DrawerTemporary';
import { DrawerHeader } from 'components/Drawer/styled';
import handleLinkClick from 'utils/linkHandler';
import useMenu from 'utils/useMenu';
import { CurrencyRootState, IMenuProps } from 'types';
import { getCurrency } from 'reducers/modules/currency';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector, EntityState } from '@reduxjs/toolkit';

const DashboardPage2Container: React.FC<IMenuProps> = ({
  title,
  pageTitle,
}) => {
  const theme = useTheme();
  const didLoad = useRef(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [listMenuOpen, setListMenuOpen] = useState(false);
  const menu = useMenu(title);
  // const stateSelector = createSelector(
  //   state => state.currency,
  //   currencyInfo => ({
  //     error: fp.get(`error`, currencyInfo),
  //     loading: fp.get(`loading`, currencyInfo),
  //     currency: fp.get(`currency`, currencyInfo),
  //   }),
  // );
  // const state = useSelector(stateSelector);
  const currency = useSelector<CurrencyRootState, any | null>(
    state => state.currency.currency,
  );
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
  const getCurrencyInfo = useCallback(() => {
    dispatch(getCurrency());
  }, [dispatch]);
  useEffect(() => {
    if (!didLoad.current) {
      getCurrencyInfo();
      didLoad.current = true;
    }
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
        activeMenu={pageTitle}
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
        <Box sx={{ p: 2 }}>
          <div style={{ fontWeight: `bold` }}>Currency Info</div>
          {!fp.isEmpty(currency) && (
            <div>Source : {fp.get(`source`, currency)}</div>
          )}
          {!fp.isEmpty(currency.quotes) && (
            <div>USDBMD : {fp.get(`USDBMD`, currency.quotes)}</div>
          )}
        </Box>
      </Box>
    </Box>
  );
};
export default DashboardPage2Container;

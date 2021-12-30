import { useState, useEffect } from 'react';
import { IMenuProps } from 'types';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AlarmAddIcon from '@mui/icons-material/AlarmAdd';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ApartmentIcon from '@mui/icons-material/Apartment';

const useMenu = props => {
  const [menu, setMenu] = useState<IMenuProps[] | []>([]);

  useEffect(() => {
    setMenu([
      {
        title: `dashboard`,
        icon: HomeIcon,
        link: `${process.env.REACT_APP_BASE_URL}/dashboard`,
        subMenu: [
          {
            label: `page1`,
            icon: MailIcon,
            link: `${process.env.REACT_APP_BASE_URL}/dashboard/page1`,
          },
          {
            label: `page2`,
            icon: AccessibilityIcon,
            link: `${process.env.REACT_APP_BASE_URL}/dashboard/page2`,
          },
        ],
      },
      {
        title: `test`,
        icon: AnalyticsIcon,
        link: `${process.env.REACT_APP_BASE_URL}/test`,
        subMenu: [
          {
            label: `first`,
            icon: AlarmAddIcon,
            link: `${process.env.REACT_APP_BASE_URL}/test/first`,
          },
          {
            label: `second`,
            icon: ApartmentIcon,
            link: `${process.env.REACT_APP_BASE_URL}/test/second`,
          },
        ],
      },
    ]);
    return () => setMenu([]);
  }, []);

  return menu;
};

export default useMenu;

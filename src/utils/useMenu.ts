import { useState, useEffect } from 'react';
import { IMenuProps } from 'types';

const useMenu = props => {
  const [menu, setMenu] = useState<IMenuProps[] | []>([]);

  useEffect(() => {
    setMenu([
      {
        title: `first`,
        subMenu: [
          {
            label: `dashboard`,
            link: `${process.env.REACT_APP_BASE_URL}/`,
          },
          {
            label: `test`,
            link: `${process.env.REACT_APP_BASE_URL}/test`,
          },
        ],
      },
      {
        title: `second`,
        link: `${process.env.REACT_APP_BASE_URL}/test`,
        subMenu: [],
      },
    ]);
    return () => setMenu([]);
  }, []);

  return menu;
};

export default useMenu;

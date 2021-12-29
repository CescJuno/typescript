import { HeaderProps } from 'types';
import HeaderTop from './top/index';
import { StyledHeader } from './styled';

const Header = ({ title, topMenu }: HeaderProps) => {
  return (
    <StyledHeader>
      <HeaderTop topMenu={topMenu} />
      <div>{title}</div>
    </StyledHeader>
  );
};
export default Header;

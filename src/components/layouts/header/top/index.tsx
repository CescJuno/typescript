import { HeaderTopProps } from 'types';
import fp from 'lodash/fp';
import Button from 'components/Button';
import { StyledHeaderTop } from './styled';

const HeaderTop: React.FC<HeaderTopProps> = ({ topMenu }) => {
  return (
    <StyledHeaderTop>
      {!fp.isEmpty(topMenu) &&
        fp.map(
          elem => (
            <Button
              key={elem}
              color={`primary`}
              variant={`contained`}
              size={`small`}
              loading={true}
              onClick={() => console.log(1)}
            >
              {elem}
            </Button>
          ),
          topMenu,
        )}
    </StyledHeaderTop>
  );
};
export default HeaderTop;

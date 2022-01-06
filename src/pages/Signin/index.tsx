import ReactHelmet from 'plugins/helmet';
import { useTheme } from '@mui/material/styles';
import SigninContainer from 'containers/Signin';
import { useSelector } from 'react-redux';
import { AuthRootState } from 'types';

const SigninPage: React.FC = () => {
  const theme = useTheme();
  const token = useSelector<AuthRootState, string | null>(
    state => state.auth.token,
  );
  return (
    <>
      <ReactHelmet
        title={`First - Test - Juno Console`}
        themeColor={theme.palette.primary.main}
      />
      <SigninContainer />
    </>
  );
};
export default SigninPage;

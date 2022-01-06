import Signin from 'components/Signin';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { login as loginSagaStart } from 'reducers/modules/auth';

const SigninContainer: React.FC = () => {
  const dispatch = useDispatch();
  const login = useCallback(reqData => {
    dispatch(loginSagaStart(reqData));
  }, []);
  return <Signin login={login} />;
};

export default SigninContainer;

import { useCallback, useRef } from 'react';
import { LoginReqType } from 'types';

interface SigninProps {
  login: (reqData: LoginReqType) => void;
}
const Signin: React.FC<SigninProps> = ({ login }) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const click = useCallback(() => {
    const email = emailRef.current && emailRef.current.value;
    const password = passwordRef.current && passwordRef.current.value;
    login({ email, password });
  }, []);
  return (
    <div>
      <input ref={emailRef} type="text" autoComplete="email" />
      <input
        ref={passwordRef}
        type="password"
        autoComplete="current-password"
      />
      <button type="button" onClick={click} />
    </div>
  );
};

export default Signin;

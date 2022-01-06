import { useRef } from 'react';
import { LoginReqType } from 'types';

interface SigninProps {
  login: (reqData: LoginReqType) => void;
}
const Signin: React.FC<SigninProps> = ({ login }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const click = () => {
    const email = `emailRef.current!.value`;
    const password = `passwordRef.current!.value`;
    login({ email, password });
  };
  return (
    <div>
      <input ref={emailRef} type="text" autoComplete="email" value={``} />
      <input
        ref={passwordRef}
        type="password"
        autoComplete="current-password"
        value={``}
      />
      <button type="button" onClick={click} />
    </div>
  );
};

export default Signin;

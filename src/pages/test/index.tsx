import { TestContainer } from 'containers';
import ReactHelmet from 'plugins/helmet';

const Test: React.FC = () => {
  return (
    <>
      <ReactHelmet title={`dashboard`} themeColor={`#000000`} />
      <TestContainer />
    </>
  );
};
export default Test;

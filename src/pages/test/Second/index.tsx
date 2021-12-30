import ReactHelmet from 'plugins/helmet';
import { useTheme } from '@mui/material/styles';
import { TestSecondContainer } from 'containers';

const TestSecond: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <ReactHelmet title={`test`} themeColor={theme.palette.primary.main} />
      <TestSecondContainer title={`test`} pageTitle={`second`} />
    </>
  );
};
export default TestSecond;

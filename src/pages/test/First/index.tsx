import ReactHelmet from 'plugins/helmet';
import { useTheme } from '@mui/material/styles';
import { TestFirstContainer } from 'containers';

const TestFirst: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <ReactHelmet title={`test`} themeColor={theme.palette.primary.main} />
      <TestFirstContainer title={`test`} pageTitle={`first`} />
    </>
  );
};
export default TestFirst;

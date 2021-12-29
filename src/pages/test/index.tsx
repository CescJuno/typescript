import ReactHelmet from 'plugins/helmet';
import { useTheme } from '@mui/material/styles';
import { TestContainer } from 'containers';

const Test: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <ReactHelmet title={`test`} themeColor={theme.palette.primary.main} />
      <TestContainer title={`test`} />
    </>
  );
};
export default Test;

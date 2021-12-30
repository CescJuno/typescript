import { DashboardPage1Container } from 'containers';
import ReactHelmet from 'plugins/helmet';
import { useTheme } from '@mui/material/styles';

const DashboardPage1: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <ReactHelmet
        title={`dashboard`}
        themeColor={theme.palette.primary.main}
      />
      <DashboardPage1Container title={`dashboard`} pageTitle={`page1`} />
    </>
  );
};
export default DashboardPage1;

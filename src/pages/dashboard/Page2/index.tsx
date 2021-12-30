import { DashboardPage2Container } from 'containers';
import ReactHelmet from 'plugins/helmet';
import { useTheme } from '@mui/material/styles';

const DashboardPage1: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <ReactHelmet
        title={`Page2 - Dashboard - Juno Console`}
        themeColor={theme.palette.primary.main}
      />
      <DashboardPage2Container title={`dashboard`} pageTitle={`page2`} />
    </>
  );
};
export default DashboardPage1;

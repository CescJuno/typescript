import { DashboardContainer } from 'containers';
import ReactHelmet from 'plugins/helmet';
import { useTheme } from '@mui/material/styles';

const Dashboard: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <ReactHelmet
        title={`dashboard`}
        themeColor={theme.palette.primary.main}
      />
      <DashboardContainer title={`dashboard`} />
    </>
  );
};
export default Dashboard;

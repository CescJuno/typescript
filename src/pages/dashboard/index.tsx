import { DashboardContainer } from 'containers';
import ReactHelmet from 'plugins/helmet';

const Dashboard: React.FC = () => {
  return (
    <>
      <ReactHelmet title={`dashboard`} themeColor={`#000000`} />
      <DashboardContainer />
    </>
  );
};
export default Dashboard;

import ReactHelmet from 'plugins/helmet';
import { useTheme } from '@mui/material/styles';
import { EmptyContainer } from 'containers';

const Empty: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <ReactHelmet title={`test`} themeColor={theme.palette.primary.main} />
      <EmptyContainer title={`test`} pageTitle={`empty`} />
    </>
  );
};
export default Empty;

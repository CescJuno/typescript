import { withTranslation } from 'react-i18next';
import { ThemeProvider as StyledThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { StylesProvider } from '@mui/styles';
import Routers from 'routers';
import theme from 'styles/theme';

const App = () => {
  return (
    <StyledThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <CssBaseline />
        <Routers />
      </StylesProvider>
    </StyledThemeProvider>
  );
};

export default withTranslation()(App);

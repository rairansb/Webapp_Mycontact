import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/global';
import themeDefault from './assets/styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles />
      <h1>MyContacts</h1>
    </ThemeProvider>
  );
}

export default App;

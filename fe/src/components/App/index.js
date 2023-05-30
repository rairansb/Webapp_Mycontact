import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import themeDefault from '../../assets/styles/themes/default';

import Header from '../Header';
import ContactsList from '../ContactsList';

import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles />
      <Container>
        <Header />
        <ContactsList />
      </Container>
    </ThemeProvider>
  );
}

export default App;

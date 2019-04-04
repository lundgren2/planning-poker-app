import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from './components/GlobalStyles';
import theme from './config/theme';
import client from './data/client';
import Routes from './routes';

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;

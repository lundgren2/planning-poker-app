import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from './components/GlobalStyles';
import theme from './config/theme';
import client from './data/client';
import routes from './routes';

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">{routes}</div>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;

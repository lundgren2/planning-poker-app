import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const Cookies = require('js-cookie');

const httpLink = createHttpLink({
  uri: `${process.env.REACT_APP_GRAPHQL_URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get('ACCESS_TOKEN');
  if (token !== undefined) {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer github ${token}` : '',
      },
    };
  }
  return { headers };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;

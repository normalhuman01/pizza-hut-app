import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http';

import { GRAPHQL_API_URL } from '../utils/constants';

const httpLink = new HttpLink({ uri: GRAPHQL_API_URL });

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      ),
    );
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

const link = ApolloLink.from([httpLink, errorLink]);
const cache = new InMemoryCache();
const client = new ApolloClient({
  link,
  cache,
});

export default client;

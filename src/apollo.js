import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core';
import { createApolloProvider } from '@vue/apollo-option';

const httpLink = createHttpLink({
  uri: 'http://localhost:8080/v1/graphql', // Replace with your GraphQL endpoint
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

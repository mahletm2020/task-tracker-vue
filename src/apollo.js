import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core';
import { provideApolloClient } from '@vue/apollo-composable';

const httpLink = createHttpLink({
  uri: 'http://localhost:8080/v1/graphql', // Replace with your GraphQL endpoint
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// Provide Apollo Client globally
provideApolloClient(apolloClient);

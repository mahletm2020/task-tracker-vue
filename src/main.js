import { createApp } from 'vue';
import App from './App.vue';
import { provideApolloClient } from '@vue/apollo-composable';
import { apolloClient } from './apollo'; // Import apolloClient

const app = createApp(App)
  .use(createApolloProvider({ defaultClient: apolloClient })) // Use createApolloProvider
  .provideApolloClient(app, apolloClient); // Provide the apolloClient instance

app.mount('#app');


// createApp(App)
//   .use(apolloProvider) // Use the Apollo provider
//   provideApolloClient(App, apolloClient); // Provide the apolloClient instance
//   mount('#app');


// import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core';
// import { createApolloProvider } from '@vue/apollo-composable';

// const httpLink = createHttpLink({
//   uri: 'http://localhost:8080/v1/graphql', // Replace with your GraphQL endpoint
// });

// export const apolloClient = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache(),
// });

// export const apolloProvider = createApolloProvider({
//   defaultClient: apolloClient,
// });


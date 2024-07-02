import { createApp } from 'vue';
import App from './App.vue';
import { apolloProvider } from './apollo'; // Import the apolloProvider

createApp(App)
  .use(apolloProvider) // Use the Apollo provider
  .mount('#app');

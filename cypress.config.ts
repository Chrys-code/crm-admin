import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    port: 57689,
    video: false,
    supportFile: false,
  },
});

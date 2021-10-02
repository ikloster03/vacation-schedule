import { createFetch } from '@vueuse/core';

const useCustomFetch = createFetch({
  baseUrl: import.meta.env.VITE_SERVER_URI ?? 'http://localhost:3001',
  // options: {},
  fetchOptions: {
    mode: 'cors',
  },
});

export default useCustomFetch;

import useCustomFetch from './fetch';

export default {
  login({ email, password }) {
    return useCustomFetch('login').post({ email, password }).json();
  },
};

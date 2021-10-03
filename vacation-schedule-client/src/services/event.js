import useCustomFetch from './fetch';

export default {
  list(payload) {
    const params = new URLSearchParams(payload).toString();

    return useCustomFetch(`event${params}`).get().json();
  },
  create(payload) {
    return useCustomFetch('event').post(payload).json();
  },

  update(id, payload) {
    return useCustomFetch(`event/${id}`).put(payload).json();
  },

  delete(id) {
    return useCustomFetch(`event/${id}`).delete().json();
  },
};

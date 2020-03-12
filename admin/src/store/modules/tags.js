import http from "../../utils/http";
const state = {
  tags: []
};

const getters = {};

const actions = {
  getAllTags({ commit, state }, force = false) {
    if (!force && state.tags.length) return;
    http.get("/api/tag/listAll").then(res => {
      const { data } = res;
      const tags = [];
      data.forEach(d => {
        tags.push(d.name);
      });
      commit("setTags", tags);
    });
  }
};

const mutations = {
  setTags(state, data) {
    state.tags = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

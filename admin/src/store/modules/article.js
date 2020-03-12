const initEdit = {
  title: "",
  summary: "",
  content: "",
  content_md: ""
};
const state = {
  editContent: initEdit
};

const getters = {};

const actions = {
  updateEdit({ commit }, data) {
    commit("saveEdit", data);
  },
  clearEdit({ commit }) {
    commit("clearEdit");
  }
};

const mutations = {
  saveEdit(state, data) {
    state.editContent = data;
  },
  clearEdit() {
    state.editContent = initEdit;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

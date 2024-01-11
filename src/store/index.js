import { createStore } from "vuex";

export default createStore({
  state: {
    roomID: null,
  },
  getters: {
    getroomid: state => state.roomID,
  },
  mutations: {
    setroomID(state,id){
      state.roomID = id;
    }
  },
  actions: {
    updateroomid(context,id){
      context.commit('setroomID',id);
    }
  },
  modules: {},
});

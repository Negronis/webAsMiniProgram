import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let setPopFunc = (state, obj, type) => { 
  if (!state.timer) { 
    state.timer = setTimeout(() => {
      state.showPoptip = false;
      clearTimeout(state.timer);
      state.timer = null;
    }, obj['duration'] || 3000)
  } 
  // else{
  //   clearInterval(state.timer);
  //   state.timer = null;
  // }
  console.log(obj,state.timer);

  Object.assign(state, {
    showPoptip: true,
    poptipType: type,
    poptipContent: obj['text'],
    poptipDuration: obj['duration']
  }) 
}
export default new Vuex.Store({
  state: {
    isMiniprogram: !!process.env.isMiniprogram,
    poptipType: "",
    showPoptip: false,
    poptipDuration: 3000,
    poptipContent: "",
    timer: null
  },
  getters: {
    getPgType(state) {
      return state.isMiniprogram;
    },
    getPoptipType(state) {
      return state.poptipType;
    },
    getShowPoptip(state) {
      return state.showPoptip
    },
    getPoptipDuration(state) {
      return state.poptipDuration;
    },
    getPoptipContent(state) {
      return state.poptipContent;
    }
  },
  mutations: {
    loading(state, obj) {
      setPopFunc(state, obj, 'info')
    },
    success(state, obj) {
      setPopFunc(state, obj, 'success')
    },
    error(state, obj) {
      setPopFunc(state, obj, 'error')
    },
    setShowPop(state, n) {
      state.showPoptip = n;
    }
  },
  actions: {
  },
  modules: {
  }
})

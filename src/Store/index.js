import Vue from "vue";
import Vuex from "vuex";
import drugs from './modules/drugs.module'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
      drugs
    }
})
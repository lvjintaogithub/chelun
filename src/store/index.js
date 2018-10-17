import Vue from 'vue';
import Vuex from 'vuex';
//更新日志
import Logger from 'vuex/dist/logger';

//引入modules
import index from './modules/index';
import detail from './modules/detail';
import quatation from './modules/quatation';
import img from './modules/img';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    index,
    detail,
    quatation,
    img
  },
  plugins: [Logger()]
});

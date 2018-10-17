const state = {
  bandList: [], //首页汽车的列表
  letters: [], //字母的数据
  carTypeList: [], //车型的数据
  isShowCarType: false //是否显示汽车类型
};

import {
  getBandList,
  getMakeList
} from '../../api';

const mutations = {
  //车型
  updataBand(state, payload) {
    // console.log('band...payload...', payload);
    state.bandList = payload;
  },
  //字母的
  updataLetter(state, payload) {
    // console.log('letters...payload...', payload);
    //把车型数据处理一下
    let letters = [];
    payload.forEach((item, index) => {
      let spell = item.Spelling[0];
      if (letters.indexOf(spell) === -1) {
        letters.push(spell);
      }
    });
    // console.log('letters...', letters);
    state.letters = letters;
  },
  //车型
  updataCarTypeList(state, payload) {
    // console.log('carTypeList...payload...', payload);
    state.carTypeList = payload;
    state.isShowCarType = true;
    
  },
  updataIsShowCarType(state){
    state.isShowCarType = false;
  }
};

const actions = {
  //汽车的
  getBand({commit}){
    getBandList().then(res => {
      commit('updataBand', res.data);
    });
  },
  //字母的
  getLetter({commit}, payload) {
    getBandList().then(body => {
      // console.log('body...', body);
      commit('updataLetter', body.data);
    });
  },
  //右边栏
  getCarTypeList({commit}, id) {
    // console.log(id);
    getMakeList(id).then(body => {
      commit('updataCarTypeList', body.data);
    });
  },
  getIsShowCarType({commit}){
    commit('updataIsShowCarType');
  }
};

const getters = {

};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};

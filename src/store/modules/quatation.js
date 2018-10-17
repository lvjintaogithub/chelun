const state = {
  isShowProvinceList: false,
  isShowCityList: false,
  quatationList: {},
  provinceList: [],
  cityList: []
};

import {
  getQuotationList,
  getProvinceList,
  getCityList
} from '../../api/index.js';

const mutations = {
  updateQuatationList(state, payload) {
    // console.log('quatationList...payload...', payload);
    state.quatationList = payload;
  },
  updateProvinceList(state, payload){
    console.log('provinceList...payload...', payload);
    state.provinceList = payload;
    state.isShowProvinceList = true;
  },
  updateIsShowProvinceList(state, payload) {
    state.isShowProvinceList = false;
  },
  updateCityList(state, payload){
    console.log('city...payload...',payload);
    state.cityList = payload;
    state.isShowCityList = true;
  },
  updateIsShowCityList(state, payload){
    state.isShowCityList = false;
  }
};

const actions = {
  getQuatationList({
    commit
  }, id) {
    getQuotationList(id).then(res => {
      commit('updateQuatationList',res.data);
    });
  },
  getProvinceList({commit}){
    getProvinceList().then(res => {
      console.log("res...province...",res.data);
      commit('updateProvinceList',res.data);
    });
  },
  getCityList({commit}, id){
    getCityList(id).then(res => {
      console.log('res...city...', res);
      commit('updateCityList', res.data);
    });
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

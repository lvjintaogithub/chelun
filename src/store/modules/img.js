const state = {
  imgList: [],
  Page: 1,
  isShowMoreImgList: false,
  moreImgList: []
};

import {
  getImgsList,
  getMoreImgList
} from '../../api/index.js';

const mutations = {

  /**
   *  做数据处理
   * @param {*} state
   * @param {*} payload
   */

  updateImgList(state, payload) {
    // console.log('imgList...payload...', payload);
    state.imgList = payload;
    // console.log('state.imgList...', state.imgList);
  },
  updateMoreCarImgList(state, payload) {
    // console.log('moreCarImg...payload...', payload.List);
    state.moreImgList = state.moreImgList.concat(payload.List);
    state.Page++;
    state.isShowMoreImgList = true;
  }
};

const actions = {
  getImgList({
    commit
  }, id) {
    // console.log('imgList...id...', id);
    getImgsList(id).then(res => {
      // console.log('res...data...', res);
      commit('updateImgList', res.data);
    });
  },
  getMoreCarImgList({
    commit
  }, payload) {
    // console.log('payload....', payload);
    payload.Page = state.Page;
    getMoreImgList(payload).then(res => {
      // console.log('res...', res.data);
      commit("updateMoreCarImgList", res.data);
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

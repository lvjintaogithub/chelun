const state = {
  detailData: {},
  allList: {},
  years: ['全部']
};

import {
  getMakeDetail
} from '../../api/index';

import {
  mergeCar,
  sortCar,
  filter
} from '../../utils/index.js';
const mutations = {
  updataMakeDetailData(state, payload) {
    // console.log('makeDetail...payload...', payload);
    state.detailData = payload;
    // console.log(mergeCar(sortCar(payload.list)));
    state.allList = mergeCar(sortCar(payload.list));
    let years = [];
    payload.list.map((item, index) => {
      // console.log('item...', item);
      if (years.indexOf(item.market_attribute.year) == -1) {
        years.push(item.market_attribute.year);
      }
      // console.log('years...', years);
    });
    state.years = state.years.concat(years);
    // console.log('state.years...', state.years);
  },
  getYearList(state, payload) {
    // console.log('activeIndex...payload...', payload);
    this.year = state.years[payload];
    // console.log('this.year...', this.year);
    if (!isNaN(this.year)) {
      state.allList = mergeCar(sortCar(filter(this.year, state.detailData.list)));
    }else{
      state.allList = mergeCar(sortCar(state.detailData.list));
    }
  }
};

const actions = {
  getMakeDetailData({
    commit
  }, id) {
    getMakeDetail(id).then(res => {
      commit('updataMakeDetailData', res.data);
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

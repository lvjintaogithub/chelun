<template>
  <div class="index">
    <div class="car_list" ref="carList">
      <div class="cars_item" v-for="(item, index) in letters" :key="index">
        <h3 :ref="item">{{item}}</h3>
        <div class="car_item" v-for="(item1,index1) in bandList" :key="index1" 
        v-if="item == item1.Spelling[0]" @click="clickCarItem(item1.MasterID)">
          <img :data-src="item1.CoverPhoto"/>
          <span v-text="item1.Name"></span>
        </div>
      </div>
    </div>
    <div class="letters" ref="letters"
    @touchstart="lettersTouchStart"
    @touchmove="lettersTouchMove"
    @touchend="lettersTouchEnd">
      <div class="letter-item" v-for="(item,index) in letters" :key="index">{{item}}</div>
    </div>
    <CarTypeList :carTypeList="carTypeList" :class="isShowCarType?'active':''"/>
  </div>
</template>
<script>
// import { getBrandList, getMakeList } from "../api/index";
import { mapState, mapActions } from "vuex";

import CarTypeList from '../components/CarTypeList';

import {lazyLoadImg} from '../utils/lazyloadImg';

export default {
  components:{
    CarTypeList
  },
  computed: {
    ...mapState({
      bandList: state => state.index.bandList,
      letters: state => state.index.letters,
      carTypeList: state => state.index.carTypeList,
      isShowCarType: state => state.index.isShowCarType
    })
  },
  methods:{
    ...mapActions({
      getBand: "index/getBand",
      getLetter: "index/getLetter",
      getCarTypeList: "index/getCarTypeList"
    }),
    clickCarItem(id) {
      // console.log(id)
      this.getCarTypeList(id)
    },
    lettersTouchStart(){

    },
    lettersTouchMove(e){
      console.log('e...',e.touches[0].pageY);
      //计算字母下标
      let index = Math.floor((e.touches[0].pageY-this.offsetTop)/this.letterHeight);
      console.log('index...',index);
      if(index<0){
        index = 0;
      }
      if(index>this.letters.length-1){
        index = this.letters.length-1;
      }
      // 计算当前划到哪个字母
      let letter = this.letters[index];
      console.log('letter...',letter);
      // 计算要滚动的距离
      let offsetTop = this.$refs[letter][0].offsetTop;
      // console.log('offsetTop...',offsetTop);
      // 滚动元素到对应位置
      this.$refs.carList.scrollTop = offsetTop;
      // console.log('this.$refs.carList.scrollTop...',this.$refs.carList.scrollTop);
    },
    lettersTouchEnd(){

    }
  },
  updated(){
    // 获取字母列表距离顶部的高度和每一个字母的高度
    this.offsetTop = this.$refs.letters.getBoundingClientRect().top;
    this.letterHeight = this.$refs.letters.children[0].getBoundingClientRect().height;
    // console.log('this.offsetTop...', this.offsetTop, 'this.letterHeight...',this.letterHeight);
  },
  mounted() {
    // console.log('this.refs.letters...',this.$refs.letters.getBoundingClientRect());
    this.getBand();
    this.getLetter();
    lazyLoadImg('.car_list');
  }
};
</script>
<style>
.index,
.car_list,
.cars_item,
.car_item {
  width: 100%;
}
.car_list{
  height: 100%;
  overflow:scroll;
}
.index {
  height: 100%;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
}
.cars_item h3 {
  background-color: #f3f3f3;
  padding-left: 0.26rem;
  font-size: 0.28rem;
  font-weight: normal;
  color: #999;
}
.car_item {
  display: flex;
  height: 1rem;
  line-height: 1rem;
  padding: 0 0.26rem;
  box-sizing: border-box;
  margin: 0 auto;
  border-bottom: solid 1px #eee;
}
.car_item img {
  width: 0.8rem;
  height: 0.8rem;
  margin: 0.1rem 0;
}
.car_item span {
  display: inline-block;
  padding-left: 0.4rem;
  font-size: 0.32rem;
}
.letters {
  position: fixed;
  right: 0.1rem;
  top: 21%;
  display: flex;
  flex-direction: column;
  /* transform: translateY(50%); */
}
.letter-item {
  display: block;
  padding: 0.02rem;
  font-size: 0.24rem;
  color: #666;
}
</style>

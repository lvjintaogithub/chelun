<template>
  <div class="province">
    <div class="location">
      <p>自动定位</p>
      <p>北京</p>
    </div>
    <div class="provinces">
      <p>省市</p>
      <ul class="province_list">
        <li v-for="(item, index) in provinceList" :key="index" :data-id="index+1" v-if="index !=3" @click="clickProvinceItem">{{item.CityName}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Province",
  data(){
    return {
      provinceId: ''
    }
  },
  props: {
    provinceList: {
      type: Array,
      default: []
    }
  },
  computed: {},
  methods: {
    ...mapActions({
      getCityList: "quatation/getCityList"
    }),
    clickProvinceItem(e){
      this.provinceId = e.target.dataset.id;
      console.log('this.provinceId',this.provinceId);
      this.getCityList(this.provinceId);
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.province {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
  background-color: #fff;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
.location {
  & > p {
    &:first-child {
      height: 0.4rem;
      line-height: 0.4rem;
      font-size: 0.24rem;
      padding-left: 0.2rem;
      background: #f4f4f4;
    }
    &:nth-child(2) {
      padding-left: 0.4rem;
      font-size: 0.28rem;
      height: 0.8rem;
      line-height: 0.8rem;
      background: #fff;
    }
  }
}
.provinces {
  & > p {
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.24rem;
    padding-left: 0.2rem;
    background: #f4f4f4;
  }
  .province_list {
    width: 100%;
    & > li {
      padding-left: 0.3rem;
      font-size: 0.28rem;
      height: 0.8rem;
      line-height: 0.8rem;
      border-bottom: 1px solid #eee;
      box-sizing: border-box;
      margin-left: 0.1rem;
      position: relative;
    }
    & > li::after {
      content: "";
      display: inline-block;
      padding-top: 0.16rem;
      padding-right: 0.16rem;
      border-top: 1px solid #999;
      border-right: 1px solid #999;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      right: 0.35rem;
      top: 0.3rem;
    }
  }
}
</style>

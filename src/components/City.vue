<template>
  <div class="city">
    <div class="cityList">
      <li v-for="(item, index) in cityList" :key="index" @click="clickCityItem">{{item.CityName}}</li>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "City",
  props: {
    cityList: {
      type: Array,
      default: []
    }
  },
  computed: {},
  methods: {
    ...mapMutations({
      updateIsShowCityList: "quatation/updateIsShowCityList",
      updateIsShowProvinceList: "quatation/updateIsShowProvinceList"
    }),
    clickCityItem() {
      this.updateIsShowCityList();
      this.updateIsShowProvinceList();
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.city {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;
  background: rgba(0, 0, 0, 0.6);
  .cityList {
    height: 100%;
    width: 70%;
    background-color: #fff;
    margin-left: 30%;
    overflow-y: auto;
    overflow-x: hidden;
    & > li {
      padding-left: 0.3rem;
      font-size: 0.28rem;
      height: 0.8rem;
      line-height: 0.8rem;
      border-bottom: 1px solid #eee;
      box-sizing: border-box;
      margin-left: 0.1rem;
    }
  }
}
</style>

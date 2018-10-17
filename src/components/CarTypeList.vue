<template>
  <div class="carType_container" ref="carType_container"
  @touchstart="carTypeTouchStart"
  @touchmove="carTypeTouchMove"
  @touchend="carTypeTouchEnd">
    <div class="carTypes_wrapper">
      <div class="carTypes_slide" v-for="(item,index) in carTypeList" :key="index">
        <h3 v-text="item.GroupName" @click="clickCarTypeTitle"></h3>
        <div class="carTypes_item" v-for="(item1,index1) in item.GroupList" :key="index1">
          <div class="carType_item" @click="clickCarTypeItem(item1.SerialID)">
            <img :src="item1.Picture"/>
            <div class="carType_info">
              <h4 v-text="item1.AliasName"></h4><span v-text="item1.DealerPrice"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {
    carTypeList: {
      type: Array,
      default: []
    }
  },
  computed: {},
  methods: {
    ...mapActions({
      getIsShowCarType: "index/getIsShowCarType"
    }),
    clickCarTypeTitle() {
      this.getIsShowCarType();
    },
    clickCarTypeItem(SerialID) {
      this.$router.push({
        path: "/detail",
        query: {
          SerialID: SerialID
        }
      });
    },
    carTypeTouchStart(e) {
      console.log('e...',e);
      //记录手指滑动的位置
      this.start = e.touches[0];
    },
    carTypeTouchMove(e) {
      //让页面跟随手指滑动
      let touch = e.touches[0];
      let offset = touch.pageX - this.start.pageX;
      console.log("offset...", offset);
      if (offset < 0) {
        offset = 0;
      }
      this.offset = offset;
      this.$refs.carType_container.style.transform = `translate3d(${offset}px,0,0)`;
      this.$refs.carType_container.style.transition = `width`;
    },
    carTypeTouchEnd() {
      //清楚行内样式
      this.$refs.carType_container.style.transform = ``;
      this.$refs.carType_container.style.transition = ``;
      if (this.offset >= window.innerWidth * 0.35) {
        this.getIsShowCarType();
      }
    }
  }
};
</script>
<style>
.carType_container {
  width: 75%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #fff;
  overflow-y: scroll;
  overflow-x: hidden;
  border-left: solid 1px #ccc;
  transform: translate3d(100%, 0, 0);
  transition: all 1s linear;
  /* ios上滑动卡顿 */
  -webkit-overflow-scrolling: touch;
}
.carType_container.active {
  transform: translate3d(0%, 0, 0);
}
.carTypes_list,
.carTypes_item {
  width: 100%;
}
.carTypes_list {
  overflow-y: auto;
  overflow-x: hidden;
}
.carTypes_slide h3 {
  background-color: #f3f3f3;
  padding-left: 0.28rem;
  font-size: 0.32rem;
  font-weight: normal;
  color: #999;
}
.carTypes_item,
.carType_item {
  width: 100%;
}
.carType_item {
  display: flex;
  padding: 0.1rem 0.2rem;
  box-sizing: border-box;
  border-bottom: solid 1px #eee;
  position: relative;
}
.carType_item img {
  width: 1.8rem;
  height: 1.2rem;
}
.carType_info {
  flex: 1;
  padding-left: 0.12rem;
}
.carType_info h4 {
  padding-top: 0.08rem;
  font-weight: normal;
  font-size: 0.34rem;
  color: #666;
}
.carType_info span {
  position: absolute;
  padding-top: 0.2rem;
  font-size: 0.28rem;
  color: #f00;
}
</style>

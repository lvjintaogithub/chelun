<template>
  <div class="showMoreImgs" ref="showMoreImgs" @scroll="moreImgScroll">
    <div class="showMoreImg" ref="showMoreImg">
      <div class="moreImg_item" v-for="(item,index) in moreImgList" :key="index">
        <img src="" :style="{'background-image':`url(${item.Url.replace('{0}', item.LowSize)}`}"/>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex';
export default {
  name: "showMoreImg",
  data(){
    return {
      SerialID: ''
    }
  },
  props: {
    moreImgList: {
      type: Array,
      default: []
    }
  },
  computed: {},
  methods: {
    ...mapActions({
      getMoreCarImgList: "img/getMoreCarImgList"
    }),
    //监听更多图片的列表滚动
    moreImgScroll() {
      console.log("scrolling...");
      let scrollTop = this.$refs.showMoreImgs.scrollTop;
      let height = this.$refs.showMoreImg.getBoundingClientRect().height;
      console.log(
        "scrollTop",
        scrollTop,
        "height...",
        height,
        height - window.innerWidth
      );
      if (scrollTop > ((height - window.innerHeight) - 20)) {
        //加载下一页
        console.log("加载下一页...");
        this.getMoreCarImgList({
          SerialID: 2593,
          ImageID: 6
        })
      }
    }
  },
  mounted() {
    console.log("showMoreImg...");
    // this.SerialID = this.$route.
  }
};
</script>
<style lang="scss" scoped>
.showMoreImgs {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  z-index: 120;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  .showMoreImg {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .moreImg_item {
    height: 2.46rem;
    width: 32.6%;
    margin-bottom: 0.1rem;
    img {
      width: 100%;
      height: 100%;
      background-size: cover;
    }
  }
}
</style>

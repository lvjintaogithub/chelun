<template>
  <div class="imgs" ref="imgs" scr>
    <div class="colorAndCarType">
     <div class="color_type"><span><em>颜色</em></span></div>
     <div class="car_type"><span><em>车款</em></span></div>
    </div>
    <div class="img-all">
      <div class="img-all-item" v-for="(item, index) in imgList" :key="index">
        <div class="img-item" v-for="(item1,index1) in item.List" :key="index1" 
        @click="clickImgItem(index1,{
          SerialID: SerialID,
          ImageID: item.Id,
          Page: 1,
          PageSize:30
        })">
          <img src="" :style="{'background-image':`url(${item1.Url.replace('{0}', item1.LowSize)}`}"/>
          <div class="img_mask" v-if="index1 == 0">
            <p>{{item.Name}}</p>
            <p>{{item.Count}}张></p>
          </div>
        </div>
      </div>
    </div>
    <showMoreImg :moreImgList="moreImgList" v-show="isShowMoreImgList"/>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import showMoreImg from '../components/showMoreImg';
export default {
  name: "Img",
  data() {
    return {
      SerialID: ""
    };
  },
  components: {
    showMoreImg
  },
  computed: {
    ...mapState({
      imgList: state => state.img.imgList,
      isShowMoreImgList: state => state.img.isShowMoreImgList,
      moreImgList: state => state.img.moreImgList
    })
  },
  methods: {
    ...mapActions({
      getMoreCarImgList: "img/getMoreCarImgList"
    }),
    clickImgItem(index1, carMsgParams) {
      // console.log("index1...", index1, "carMsgParams...", carMsgParams);
      if (index1 === 0) {
        // console.log("点中了遮罩");
        this.getMoreCarImgList(carMsgParams);
      } else {
        return;
      }
    }
  },
  mounted() {
    // console.log('img...');
    this.SerialID = this.$route.query.SerialID;
    // console.log("this.$route...", this.$route.query.SerialID);
  }
};
</script>
<style lang="scss" scoped>
.imgs {
  height: 100%;
  width: 100%;
  position: relative;
  background: #f4f4f4;
}
.colorAndCarType {
  width: 100%;
  position: fixed;
  background: #fff;
  top: 0;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  z-index: 99;
  & > div {
    -webkit-box-flex: 1;
    flex: 1;
    text-align: center;
    box-sizing: border-box;
    color: #454545;
    display: inline-block;
    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 50%;
      padding-top: 0.16rem;
      padding-right: 0.16rem;
      border-top: 2px solid #ccc;
      border-right: 2px solid #ccc;
      -webkit-transform: rotate(135deg);
      transform: rotate(135deg);
      margin-left: 0.2rem;
      vertical-align: 5%;
    }
    & > span {
      max-width: 2.6rem;
      display: inline-block;
      vertical-align: middle;
      line-height: 1.25;
      font-size: 0.28rem;
      & > em {
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
      }
    }
  }
}
.img-all {
  width: 100%;
  position: absolute;
  background: #fff;
  top: 0.98rem;
  bottom: 0;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  border-bottom: 0.4rem solid #f4f4f4;
  .img-all-item {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .img-item {
    // width: 2.46rem;
    height: 2.46rem;
    width: 32.6%;
    margin-bottom: 0.1rem;
    &:first-child {
      position: relative;
    }
    img {
      width: 100%;
      height: 100%;
      background-size: cover;
    }
    .img_mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 2.46rem;
      height: 2.46rem;
      // width: 100%;
      // height: 100%;
      text-align: center;
      background: rgba(56, 90, 130, 0.5);
      & > p {
        color: #fff;
        display: block;
        &:first-child {
          font-size: 0.28rem;
          margin-top: 0.8rem;
        }
        &:nth-child(2) {
          font-size: 0.26rem;
        }
      }
    }
  }
}
</style>

<template>
  <div class="detail">
    <div class="detail-content">
      <!-- {{detailData.SerialID}} -->
      <div class="banner-box" @click="toImgs(detailData.SerialID)">
        <img :src="detailData.CoverPhoto"/>
        <span>{{detailData.pic_group_count}}张照片</span>
      </div>
      <div class="car_info">
        <div class="car_info_l">
          <p class="dealer_price">{{detailData.market_attribute && detailData.market_attribute.dealer_price}}</p>
          <p class="official_refer_price">{{detailData.market_attribute && detailData.market_attribute.official_refer_price}}</p>
        </div>
        <div class="car_info_r"><button v-text="detailData.BottomEntranceTitle" @click="toQuotation"></button></div>
      </div>
      <div class="car_info_list">
        <div class="car_years">
          <div class="car_year_item" v-for="(item,index) in years" :key="index" v-text="item"
          @click="clickCarYearItem" :data-index="index" :data-text="item" 
          :class="[activeIndex == index?'car_year_active':'']"></div>
        </div>
        <div class="car_info_item" v-for="(value,key) in allList" :key="key">
          <p v-text="key"></p>
          <div class="car_item_info" v-for="(item,index) in value" :key="index">
            <h3>{{item.market_attribute.year}}款 {{item.car_name}}</h3>
            <p>{{item.horse_power}}马力{{item.gear_num}}档双离合</p>
            <p>
              <span>指导价 {{item.market_attribute.dealer_price_max}}</span>
              <span>{{item.market_attribute.official_refer_price}}起</span>
            </p>
            <button @click="toQuotation(item.car_id)">询问报价</button>
          </div>
        </div>
      </div>
    </div>
    <div class="bot_button">
      <button @click="toQuotation"><p v-text="detailData.BottomEntranceTitle"></p><p>本地经销商为你报价</p></button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  // 排序规则
  // 排量的升序=>发动机功率升序=>吸气方式（自然吸气>涡轮增压）=>年份降序
  name: "Detail",
  data() {
    return {
      activeIndex: 0
    };
  },
  computed: {
    ...mapState({
      detailData: state => state.detail.detailData,
      allList: state => state.detail.allList,
      years: state => state.detail.years
    })
  },
  methods: {
    ...mapActions({
      getMakeDetailData: "detail/getMakeDetailData",
      getQuatationList: "quatation/getQuatationList",
      getImgList: "img/getImgList"
    }),
    ...mapMutations({
      getYearList: "detail/getYearList"
    }),
    clickCarYearItem(event) {
      console.log("event...", event.target.dataset);
      this.activeIndex = event.target.dataset.index;
      this.getYearList(this.activeIndex);
    },
    toQuotation(carId){
      this.$router.push({
        path: '/quotation',
        query:{
          carId: carId
        }
      })
      this.getQuatationList(carId);
    },
    toImgs(SerialID){
      // console.log('SerialID...',SerialID);
      this.$router.push({
        path: '/img',
        query:{
          SerialID: SerialID
        }
      })
      this.getImgList(SerialID);
    }
  },
  mounted() {
    // console.log(this.$route.query.SerialID);
    this.SerialID = this.$route.query.SerialID;
    // console.log("SerialID...", this.SerialID);
    this.getMakeDetailData(this.SerialID);
  }
};
</script>
<style lang="scss">
.detail {
  width: 100%;
  height: 100%;
  margin-bottom:3.08rem;
}

.detail-content {
  overflow-y: auto;
  overflow-x: hidden;
}
.banner-box {
  height: 3.29rem;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  img {
    // height: 100%;
    width: 100%;
  }
  & > span {
    position: absolute;
    bottom: 0.3rem;
    right: 0.3rem;
    color: #fff;
    padding: 1px 0.1rem;
    border-radius: 0.2rem;
    background: rgba(0, 0, 0, 0.6);
    font-size: 0.24rem;
  }
}

.car_info {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.2rem 0.1rem;
  box-sizing: border-box;
  border-bottom: 0.18rem solid #f4f4f4;
}
.car_info_l {
  flex: 1;
}
.dealer_price {
  font-size: 0.36rem;
  color: red;
  font-weight: 500;
}
.official_refer_price {
  font-size: 0.26rem;
  color: silver;
}
.car_info_r {
  display: flex;
  align-items: center;
  & > button {
    width: 3.74rem;
    height: 0.7rem;
    line-height: 0.7rem;
    background-color: #00afff;
    border: 0;
    outline: 0 none;
    border-radius: 0.1rem;
    font-size: 0.32rem;
    color: #fff;
  }
}

.car_info_list {
  width: 100%;
}
.car_years {
  display: flex;
  .car_year_item {
    font-size: 0.32rem;
    padding: 0.2rem;
    box-sizing: border-box;
  }
  .car_year_active {
    color: #00afff;
  }
}
.car_info_item {
  & > p {
    padding: 0 0.2rem;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.26rem;
    color: #999;
    background: #f4f4f4;
  }
  .car_item_info {
    padding: 0 0.2rem;
    box-shadow: border-box;
    border-bottom: 0.18rem solid #f4f4f4;
    & > h3 {
      padding: 0.26rem 0 0.18rem;
      font-size: 0.3rem;
      line-height: 1;
      color: #3d3d3d;
    }
    & > p {
      &:nth-of-type(1) {
        color: #bdbdbd;
        font-size: 0.26rem;
      }
      &:nth-of-type(2) {
        text-align: right;
        padding-bottom: 0.1rem;
        font-size: 0.24rem;
        color: #818181;
        & > span {
          &:first-child {
            text-align: right;
            padding-bottom: 0.1rem;
            font-size: 0.24rem;
            color: #818181;
          }
          &:nth-child(2) {
            font-size: 0.3rem;
            color: #ff2336;
            margin-left: 0.1rem;
          }
        }
      }
    }
    button {
      border: none;
      border-top: 1px solid #eee;
      width: 110%;
      height: 0.8rem;
      font-size: 0.32rem;
      color: #00afff;
      background: #fff;
      font-weight: 500;
      margin-left: -0.3rem;
    }
  }
}

.bot_button {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 1rem;
  width: 100%;
  display: flex;
  & > button {
    height: 1rem;
    width: 100%;
    background-color: #00afff;
    color: #fff;
    border: 0;
    outline: 0 none;
    & > p {
      &:first-child {
        font-size: 0.32rem;
        // margin-top: 0.12rem;
        font-weight: 500;
      }
      &:nth-child(2) {
        font-size: 0.24rem;
      }
    }
  }
}
</style>

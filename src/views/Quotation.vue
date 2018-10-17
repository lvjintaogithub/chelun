<template>
  <div class="quotation">
    <div class="header">
      <p>可向多个商家咨询最低价，商家及时回复</p><img src="../assets/icon-help.png"/>
    </div>
    <div class="quotation-content">
      <div class="car_info">
        <img :src="quatationList.details && quatationList.details.serial.Picture"/>
        <div class="car_info_r">
          <h3 v-text="quatationList.details && quatationList.details.serial.AliasName"></h3>
          <p>{{quatationList.details && quatationList.details.market_attribute.year}}款 {{quatationList.details && quatationList.details.car_name}}</p>
        </div>
      </div>
      <div class="person_message">
        <p>个人信息</p>
        <ul class="per_msg_list">
          <li>
            <span>姓名</span>
            <input type="text" placeholder="输入你的真实中文姓名">
          </li>
          <li>
            <span>手机</span>
            <input type="text" placeholder="输入你的真实手机号码">
          </li>
          <li><span>城市</span><span @click="clickCity">北京</span></li>
        </ul>
        <div class="per_msg_btn">
          <button>询最低价</button>
        </div>
      </div>
      <div class="dealer_info">
        <p>选择报价经销商</p>
        <ul class="dealer_info_list">
          <li :class="[dealerInfoId == index?'active':'']" v-for="(item,index) in quatationList.list" 
          :key="index" :id="index" @click="clickDealerInfoItem">
            <p><span v-text="item.dealerShortName"></span><span>{{item.promotePrice.slice(0,2)}}万</span></p>
            <p><span v-text="item.address"></span><span>售{{item.saleRange}}</span></p>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <button>询最低价</button>
    </div>
    <Province :provinceList="provinceList" v-show="isShowProvinceList"/>
    <City :cityList="cityList" v-show="isShowCityList"/>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

import Province from "../components/Province";
import City from "../components/City";

export default {
  name: "Quotation",
  data(){
    return {
      dealerInfoId: ''
    }
  },
  components: {
    Province,
    City
  },
  computed: {
    ...mapState({
      quatationList: state => state.quatation.quatationList,
      provinceList: state => state.quatation.provinceList,
      cityList: state => state.quatation.cityList,
      isShowProvinceList: state => state.quatation.isShowProvinceList,
      isShowCityList: state => state.quatation.isShowCityList
    })
  },
  methods: {
    ...mapActions({
      getProvinceList: "quatation/getProvinceList"
    }),
    clickCity() {
      console.log('clickCiy...');
      this.getProvinceList();
    },
    clickDealerInfoItem(e){
      this.dealerInfoId = e.target.id;
    }
  },
  mounted() {
    // console.log(this.$route.query.carId);
  }
};
</script>
<style lang="scss" scoped>
.quotation {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
.header {
  height: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #79cd92;
  z-index: 99;
  p {
    color: #fff;
    font-size: 0.3rem;
    display: inline-block;
  }
  img {
    width: 0.3rem;
    margin-left: 0.1rem;
    vertical-align: -9%;
  }
}
.quotation-content {
  -webkit-box-flex: 1;
  flex: 1;
  width: 100%;
  height: auto;
  background: #f4f4f4;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.car_info::before {
  content: "";
  display: inline-block;
  padding-top: 0.16rem;
  padding-right: 0.16rem;
  border-top: 2px solid #ccc;
  border-right: 2px solid #ccc;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  right: 0.26rem;
  top: 0.9rem;
}
.car_info {
  background: #fff;
  padding: 0.32rem 0.18rem 0.24rem;
  position: relative;
  height: 2rem;
  box-sizing: border-box;
  & > img {
    width: 2.3rem;
    height: 1.41rem;
    border: 1px solid #eee;
    box-sizing: border-box;
    border-radius: 5px;
  }
}
.car_info_r {
  flex: 1;
  margin-left: 0.2rem;
  width: 4.3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  h3 {
    font-size: 0.36rem;
    line-height: 1;
  }
  p {
    margin-top: 0.26rem;
    font-size: 0.32rem;
    line-height: 1.2;
    color: #333;
  }
}
.person_message {
  width: 100%;
  p {
    height: 0.5rem;
    line-height: 0.5rem;
    padding: 0 0.2rem;
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 0.24rem;
    color: #666;
    background: #eee;
  }
  .per_msg_list {
    width: 100%;
    background: #fff;
    padding: 0 0.2rem;
    box-sizing: border-box;
    li {
      &:last-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > span {
          &:last-child {
            display: inline-block;
            width: 88%;
            color: #555;
            text-align: right;
            box-sizing: border-box;
            &::after {
              content: "";
              display: inline-block;
              padding-top: 0.16rem;
              padding-right: 0.16rem;
              border-top: 1px solid silver;
              border-right: 1px solid silver;
              -webkit-transform: rotate(45deg);
              transform: rotate(45deg);
            }
          }
        }
      }
      font-size: 0.32rem;
      height: 0.88rem;
      line-height: 0.88rem;
      border-bottom: 1px solid #eee;
      box-sizing: border-box;
      color: #000;
      span {
        font-size: 0.32rem;
        height: 0.88rem;
        line-height: 0.88rem;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        color: #000;
      }
      input {
        font-size: 0.32rem;
        padding-right: 0.2rem;
        width: 88%;
        text-align: right;
        box-sizing: border-box;
        color: #555;
      }
    }
  }
  .per_msg_btn {
    background: #fff;
    text-align: center;
    padding-top: 0.3rem;
    padding-bottom: 0.28rem;
    margin: 0 auto;
    & > button {
      font-size: 0.32rem;
      color: #fff;
      width: 80%;
      background: #3aacff;
      height: 0.7rem;
      border-radius: 0.1rem;
      outline: none;
      -webkit-appearance: none;
      border: none;
    }
  }
}
.dealer_info {
  & > p {
    padding: 0 0.2rem;
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 0.24rem;
    color: #666;
    background: #eee;
  }
  .dealer_info_list {
    background: #fff;
    padding: 0 0.18rem;
    & > li {
      position: relative;
      padding: 0.26rem 0 0.26rem 0.54rem;
      border-bottom: 1px solid #eee;
      box-sizing: border-box;
      height: 1.65rem;
      &.avtive:before {
        background: #3aacff;
        border: none;
      }
      &::before {
        content: "";
        display: inline-block;
        width: 0.32rem;
        height: 0.32rem;
        border-radius: 50%;
        border: 2px solid #ccc;
        box-sizing: border-box;
        position: absolute;
        left: 0.05rem;
        top: 50%;
        -webkit-transform: translate3d(0, -50%, 0);
        transform: translate3d(0, -50%, 0);
      }
      &::after {
        content: "";
        display: inline-block;
        padding-top: 0.17rem;
        padding-right: 0.1rem;
        border: 2px solid #fff;
        -webkit-transform: rotate(40deg) translate3d(0, -50%, 0);
        transform: rotate(40deg) translate3d(0, -50%, 0);
        position: absolute;
        left: 0.07rem;
        border-left: none;
        border-top: none;
        top: 47%;
      }
      & > p {
        &:first-child {
          font-size: 0.3rem;
          & > span {
            &:last-child {
              font-size: 0.24rem;
              float: right;
              color: red;
            }
          }
        }
        &:nth-child(2) {
          margin-top: 0.1rem;
          font-size: 0.24rem;
          color: #a2a2a2;
          & > span {
            &:first-child {
              display: inline-block;
              max-width: 4.6rem;
            }
            &:nth-child(2) {
              float: right;
            }
          }
        }
      }
    }
  }
}
.footer {
  width: 100%;
  z-index: 99;
  button {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: #3aacff;
    text-align: center;
    font-size: 0.34rem;
    color: #fff;
  }
}
</style>

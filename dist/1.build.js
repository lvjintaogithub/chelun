webpackJsonp([1],{27:function(t,e,i){"use strict";function r(t){i(44)}Object.defineProperty(e,"__esModule",{value:!0});var a=i(33),o=i(46),n=i(5),s=r,c=n(a.a,o.a,!1,s,null,null);e.default=c.exports},33:function(t,e,i){"use strict";var r=i(6),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t};e.a={name:"Detail",data:function(){return{car_years:["全部","2017","2018"]}},computed:a({},Object(r.c)({detailData:function(t){return t.detail.detailData}})),methods:a({},Object(r.b)({getMakeDetailData:"detail/getMakeDetailData"})),mounted:function(){console.log(this.$route.query.SerialID),this.SerialID=this.$route.query.SerialID,console.log("SerialID...",this.SerialID),this.getMakeDetailData(this.SerialID)}}},44:function(t,e,i){var r=i(45);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=i(7).default;a("12e262fa",r,!0,{})},45:function(t,e,i){e=t.exports=i(2)(!1),e.push([t.i,".detail{height:100%}.banner-box,.detail{width:100%;position:relative}.banner-box{height:3.48rem}.banner-box img{height:100%;width:100%}.banner-box span{position:absolute;right:.36rem;bottom:.36rem;background-color:hsla(0,0%,61%,.6);font-size:.26rem;color:#fff;border-radius:.4rem;padding:.02rem .08rem}.car_info{width:100%;display:flex;align-items:center;padding:0 .2rem;box-sizing:border-box;border-bottom:.16rem solid #eee}.car_info_l{flex:1}.dealer_price{font-size:.36rem;color:red;font-weight:500}.official_refer_price{font-size:.26rem;color:silver}.car_info_r button{width:3.74rem;height:.7rem;background-color:#00afff;border:0;outline:0 none;border-radius:.1rem;font-size:.32rem;color:#fff;margin-bottom:.5rem}.car_info_list{width:100%}.car_years{display:flex}.car_years .car_year_item{font-size:.32rem;padding:.2rem;box-sizing:border-box}.car_info_item>p{padding:0 .2rem;height:.5rem;line-height:.5rem;font-size:.26rem;color:#999;background:#f4f4f4}.car_info_item .car_item_info{padding:.2rem;box-shadow:border-box}.car_info_item .car_item_info h3{padding:.26rem 0 .18rem;font-size:.3rem;line-height:1;color:#3d3d3d}.car_info_item .car_item_info>p:first-child{color:#bdbdbd;font-size:.26rem}.car_info_item .car_item_info>p:nth-child(2)>span:first-child{text-align:right;padding-bottom:.1rem;font-size:.24rem;color:#818181}.car_info_item .car_item_info>p:nth-child(2)>span:nth-child(2){font-size:.3rem;color:#ff2336;margin-left:.1rem}.bot_button{position:fixed;bottom:0;left:0;width:100%}.bot_button button{height:1rem;width:100%;background-color:#00afff;color:#fff;border:0;outline:0 none}.bot_button button span{font-size:.32rem;margin-top:.12rem;font-weight:500}.bot_button button p{font-size:.24rem}",""])},46:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail"},[i("div",{staticClass:"detail-content"},[i("div",{staticClass:"banner-box"},[i("img",{attrs:{src:t.detailData.Picture}}),t._v(" "),i("span",[t._v(t._s(t.detailData.pic_group_count)+"张照片")])]),t._v(" "),i("div",{staticClass:"car_info"},[i("div",{staticClass:"car_info_l"},[i("p",{staticClass:"dealer_price",domProps:{textContent:t._s(t.detailData.market_attribute.dealer_price)}}),t._v(" "),i("p",{staticClass:"official_refer_price",domProps:{textContent:t._s(t.detailData.market_attribute.official_refer_price)}})]),t._v(" "),i("div",{staticClass:"car_info_r"},[i("button",{domProps:{textContent:t._s(t.detailData.BottomEntranceTitle)}})])]),t._v(" "),i("div",{staticClass:"car_info_list"},[i("div",{staticClass:"car_years"},t._l(t.car_years,function(e,r){return i("div",{key:r,staticClass:"car_year_item",domProps:{textContent:t._s(e)}})})),t._v(" "),t._m(0)])]),t._v(" "),i("div",{staticClass:"bot_button"},[i("button",[i("span",{domProps:{textContent:t._s(t.detailData.BottomEntranceTitle)}}),i("p",[t._v("本地经销商为你报价")])])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"car_info_item"},[i("p",[t._v("1.4L/110kW 涡轮增压")]),t._v(" "),i("div",{staticClass:"car_item_info"},[i("h3",[t._v("奥术大师多所大多阿萨德")]),t._v(" "),i("p",[t._v("奥术大师sad啊大声道")]),t._v(" "),i("p",[i("span",[t._v("阿萨德的")]),i("span",[t._v("sad按时的按时")])])]),t._v(" "),i("button",[t._v("询问报价")])])}],o={render:r,staticRenderFns:a};e.a=o}});
//# sourceMappingURL=1.build.js.map
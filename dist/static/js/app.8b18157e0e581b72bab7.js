webpackJsonp([1],{"0Qak":function(t,s){},"34KM":function(t,s){},"3fZm":function(t,s){},B2UK:function(t,s){},BYOY:function(t,s){},Cg8m:function(t,s){},FVde:function(t,s){},MUN8:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a=e("woOf"),n=e.n(a);var o={props:{size:{type:Number,default:12},type:{type:Number,detault:0},hasBg:{type:Boolean,detault:!0}},computed:{itemClasses:function(t,s,e){if(12===this.size&&this.hasBg)switch(this.type){case 0:return"size12 decrease bg";case 1:return"size12 discount bg";case 2:return"size12 special bg";case 3:return"size12 invoice bg";case 4:return"size12 guarantee bg"}else if(12!==this.size||this.hasBg)if(16===this.size&&this.hasBg)switch(this.type){case 0:return"size16 decrease bg";case 1:return"size16 discount bg";case 2:return"size16 special bg";case 3:return"size16 invoice bg";case 4:return"size16 guarantee bg"}else switch(this.type){case 0:return"size16 decrease nobg";case 1:return"size16 discount nobg";case 2:return"size16 special nobg";case 3:return"size16 invoice nobg";case 4:return"size16 guarantee nobg"}else switch(this.type){case 0:return"size12 decrease nobg";case 1:return"size12 discount nobg";case 2:return"size12 special nobg";case 3:return"size12 invoice nobg";case 4:return"size12 guarantee nobg"}}}},r={render:function(){var t=this.$createElement;return(this._self._c||t)("i",{staticClass:"icon",class:this.itemClasses})},staticRenderFns:[]};var c=e("VU/8")(o,r,!1,function(t){e("fDQA")},"data-v-43d61d2c",null).exports,l={name:"",props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(t){for(var s=[],e=Math.floor(2*this.score)/2,i=e%1!=0,a=Math.floor(e),n=0;n<a;n++)s.push("on");return i&&s.push("half"),s.length<5&&s.push("off"),s}}},v={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"star",class:this.starType},this._l(this.itemClasses,function(t,e){return s("span",{key:e,staticClass:"star-item",class:t})}))},staticRenderFns:[]};var d=e("VU/8")(l,v,!1,function(t){e("B2UK")},"data-v-7c3563fb",null).exports,u={name:"v-header",components:{BaseStar:d,BaseIcon:c},data:function(){return{showDetail:!1}},props:{seller:{type:Object}},methods:{showDetail1:function(){this.showDetail=!0},closeDetail1:function(){this.showDetail=!1}}},h={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"v-header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avartar"},[e("img",{attrs:{src:t.seller.avatar,alt:"头像",width:"64",height:"64"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n        "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n      ")]),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("BaseIcon",{attrs:{size:12,"has-bg":!1,type:0}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])],1):t._e()]),t._v(" "),e("div",{staticClass:"supports-count",on:{click:t.showDetail1}},[e("span",{staticClass:"count"},[t._v("5")]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})])]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetail1}},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showDetail,expression:"showDetail"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("div",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("BaseStar",{attrs:{score:t.seller.score,size:48}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"name"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s){return e("li",{key:s.type,staticClass:"support-item"},[e("BaseIcon",{attrs:{size:16,"has-bg":!1,type:s.type}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])],1)})):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"name"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:t.closeDetail1}},[e("i",{staticClass:"icon-close"})])])])],1)},staticRenderFns:[]};var p=e("VU/8")(u,h,!1,function(t){e("BYOY")},"data-v-5f2fb7ee",null).exports,f=e("mtWM"),_=e.n(f),C={name:"App",data:function(){return{seller:{id:(t={},(s=window.location.search.match(/[?&][^?&]+=[^?&]+/g))&&s.forEach(function(s){var e=s.substring(1).split("="),i=decodeURIComponent(e[0]),a=decodeURIComponent(e[1]);t[i]=a}),t).id}};var t,s},components:{TheHeader:p},created:function(){var t=this;_.a.get("https://easy-mock.com/mock/5b3ebebe04502462c6feb5bb/ysl2/seller?id"+this.seller.id).then(function(s){0===s.data.errno&&(t.seller=n()({},t.seller,s.data.data))})}},g={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("TheHeader",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab border-1px"},[e("router-link",{staticClass:"tab-item",attrs:{to:"/goods"}},[t._v("商品")]),t._v(" "),e("router-link",{staticClass:"tab-item",attrs:{to:"/ratings"}},[t._v("评论")]),t._v(" "),e("router-link",{staticClass:"tab-item",attrs:{to:"/seller"}},[t._v("商家")])],1),t._v(" "),e("div",{staticClass:"content"},[e("keep-alive",[e("router-view",{attrs:{seller:t.seller}})],1)],1)],1)},staticRenderFns:[]};var m=e("VU/8")(C,g,!1,function(t){e("0Qak")},null,null).exports,w=e("/ocq"),y=e("GQaK"),b={props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:2},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},computed:{positive:function(){return this.ratings.filter(function(t){return 0===t.rateType})},negative:function(){return this.ratings.filter(function(t){return 1===t.rateType})}},methods:{showRating:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)},custom:function(t){this.$emit("custom",t)},toggleSwitch:function(){this.$emit("toggle")}}},x={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratingselect"},[e("div",{staticClass:"selectType border-1px"},[e("span",{staticClass:"block position",class:{active:2===t.selectType},on:{click:function(s){t.custom(2)}}},[t._v(t._s(t.desc.all)+"\n      "),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("span",{staticClass:"block position",class:{active:0===t.selectType},on:{click:function(s){t.custom(0)}}},[t._v(t._s(t.desc.positive)+"\n      "),e("span",{staticClass:"count"},[t._v(t._s(t.positive.length))])]),t._v(" "),e("span",{staticClass:"block negative",class:{active:1===t.selectType},on:{click:function(s){t.custom(1)}}},[t._v(t._s(t.desc.negative)+"\n      "),e("span",{staticClass:"count"},[t._v(t._s(t.negative.length))])])]),t._v(" "),e("div",{staticClass:"switch",class:{on:!0===t.onlyContent},on:{click:t.toggleSwitch}},[e("i",{staticClass:"icon-check_circle"}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},staticRenderFns:[]};var k=e("VU/8")(b,x,!1,function(t){e("FVde")},"data-v-2edf86da",null).exports,S={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"spilt"})},staticRenderFns:[]};var T=e("VU/8")({},S,!1,function(t){e("tbdQ")},"data-v-39fe24fb",null).exports,P={props:{food:{type:Object,default:function(){return{}}}},methods:{addCart:function(){if(!this.food.count)return this.$set(this.food,"count",1),1;this.food.count++},decreaseCart:function(){this.food.count&&this.food.count--}}},$={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.decreaseCart(s)}}},[e("i",{staticClass:"icon-remove_circle_outline inner"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"cart-add icon-add_circle",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addCart(s)}}})],1)},staticRenderFns:[]};var F=e("VU/8")(P,$,!1,function(t){e("Cg8m")},"data-v-0e6053ee",null).exports;function z(t,s){/(y+)/gi.test(s)&&(s=s.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var e={"M+":t.getMonth()+1,"d+":t.getDay(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in e)if(new RegExp("("+i+")").test(s)){var a=e[i]+"";s=s.replace(RegExp.$1,1===RegExp.$1.length?a:B(a)),console.log("ok?")}return s}function B(t){return("00"+t).substr(t.length)}var N={props:{food:{type:Object,default:function(){return{}}}},components:{ControlCar:F,SelectRatings:k,BaseSpilt:T},data:function(){return{showFlag:!1,desc:{all:"全部",positive:"推荐",negative:"吐槽"},onlyContent:!1,selectType:2}},methods:{show:function(){var t=this;this.showFlag=!0,this.selectType=2,this.onlyContent=!1,this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new y.a(t.$refs.food,{click:!0})})},hide:function(){this.showFlag=!1},buy:function(){this.$set(this.food,"count",1)},showRating:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)},select1:function(t){this.selectType=t},toggleContent:function(){this.onlyContent=!this.onlyContent}},filters:{_formatDate:function(t){return z(new Date(t),"yyyy-MM-dd hh-mm-ss")}}},R={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],ref:"food",staticClass:"food"},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.image,alt:""}}),t._v(" "),e("div",{staticClass:"back-button",on:{click:t.hide}},[e("i",{staticClass:"icon-arrow_lift"})])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"detail"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(t.food.sellCount)+"份")]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v(t._s(t.food.oldPrice))])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cartcontrol-wrapper"},[e("ControlCar",{attrs:{food:t.food}})],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:0===t.food.count||!t.food.count,expression:"food.count === 0 || !food.count"}],staticClass:"buy",on:{click:t.buy}},[t._v("\n          加入购物车\n          ")])])],1),t._v(" "),e("BaseSpilt",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"food-info"},[e("h1",{staticClass:"title"},[t._v("商品信息")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("BaseSpilt"),t._v(" "),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("SelectRatings",{attrs:{ratings:t.food.ratings,desc:t.desc,onlyContent:t.onlyContent,selectType:t.selectType},on:{custom:t.select1,toggle:t.toggleContent}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings&&t.food.ratings.length,expression:"food.ratings && food.ratings.length"}]},t._l(t.food.ratings,function(s,i){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.showRating(s.rateType,s.text),expression:"showRating(rating.rateType, rating.text)"}],key:i,staticClass:"rating-item border-1px"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("img",{staticClass:"avatar",attrs:{src:s.avatar,width:"12",height:"12"}})]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("_formatDate")(s.rateTime)))]),t._v(" "),e("p",{staticClass:"text"},[e("i",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v("\n                "+t._s(s.text)+"\n              ")])])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.ratings||!t.food.ratings.length,expression:"!food.ratings || !food.ratings.length"}],staticClass:"norating"},[t._v("暂无评论。")])])],1)],1)])])},staticRenderFns:[]};var E=e("VU/8")(N,R,!1,function(t){e("MUN8")},"data-v-61aca712",null).exports,D={props:{selectFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},data:function(){return{shopGoods:this.selectFoods,fold:!0}},components:{ControlCar:F},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){return 0===this.totalPrice?"￥"+this.minPrice+"起送":this.totalPrice>=this.minPrice?"去结算":this.totalPrice<this.minPrice?"还差"+(this.minPrice-this.totalPrice)+"起送":void 0},enough:function(){return this.totalPrice>=this.minPrice?"enough":"not-enough"},listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var s=!this.fold;return s&&this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new y.a(t.$refs.listContent,{click:!0})}),s}},methods:{clear:function(){this.selectFoods.forEach(function(t){t.count=0})},toggleShowShop:function(){this.totalCount&&(this.fold=!this.fold)},hidecar:function(){this.fold=!0},pay:function(){this.totalPrice<this.minPrice||window.alert("支付"+this.totalPrice+"元")}}},U={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"shopcar"},[e("div",{staticClass:"content"},[e("div",{staticClass:"content-left",on:{click:t.toggleShowShop}},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{hightLight:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart",class:{hightLight:t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{hightLight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice)+"元")]),t._v(" "),e("div",{staticClass:"desc"},[t._v("需要配送费"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right",class:t.enough,on:{click:t.pay}},[t._v(t._s(t.payDesc))])]),t._v(" "),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"showcar-list"},[e("div",{staticClass:"showcar-header border-1px"},[e("span",{staticClass:"text"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"clear",on:{click:t.clear}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"showcar-content"},[e("ul",t._l(t.selectFoods,function(s,i){return e("li",{key:i,staticClass:"food-list border-1px"},[e("div",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("ControlCar",{attrs:{food:s}})],1),t._v(" "),e("div",{staticClass:"price"},[t._v("￥"+t._s(s.price))])])}))])])])],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"listmask",on:{click:t.hidecar}})])],1)},staticRenderFns:[]};var H={components:{ShopCar:e("VU/8")(D,U,!1,function(t){e("yxCf")},"data-v-71f74bce",null).exports,ControlCar:F,PageGoodsFood:E,BaseIcon:c},props:{seller:{type:Object}},data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},created:function(){var t=this;_.a.get("https://easy-mock.com/mock/5b3ebebe04502462c6feb5bb/ysl2/goods").then(function(s){0===s.data.errno&&(t.goods=s.data.data,t.$nextTick(function(){t._initScroll(),t.calculateHight()}))})},methods:{_initScroll:function(){var t=this;this.menuScroll=new y.a(this.$refs.menu,{click:!0}),this.goodsScroll=new y.a(this.$refs.goods,{click:!0,probeType:3}),this.goodsScroll.on("scroll",function(s){s.y<=0&&(t.scrollY=Math.abs(Math.round(s.y)))})},calculateHight:function(){var t=this.$refs.foodItem,s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}},followGoods:function(t){this.goodsScroll.scrollToElement(this.$refs.foodItem[t],300,0,0)},_selectedFood:function(t){this.selectedFood=t,this.$refs.food.show()}}},M={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"goods"},[e("div",{ref:"menu",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{key:i,staticClass:"list-item",class:{isCurrent:t.currentIndex===i},on:{click:function(s){t.followGoods(i)}}},[e("span",{staticClass:"text border-1px"},[e("BaseIcon",{attrs:{size:12,"has-bg":!0,type:s.type}}),t._v(t._s(s.name)+"\n          ")],1)])}))]),t._v(" "),e("div",{ref:"goods",staticClass:"goods-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{key:i,ref:"foodItem",refInFor:!0,staticClass:"food-list"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s,i){return e("li",{key:i,staticClass:"food-item border-1px",on:{click:function(e){t._selectedFood(s)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{src:s.icon,width:"57",height:"57"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),t._v(" "),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v(t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("ControlCar",{attrs:{food:s}})],1)])])}))])}))]),t._v(" "),e("ShopCar",{attrs:{deliveryPrice:t.seller.deliveryPrice,minPrice:t.seller.minPrice,selectFoods:t.selectFoods}})],1),t._v(" "),e("PageGoodsFood",{ref:"food",attrs:{food:t.selectedFood}})],1)},staticRenderFns:[]};var I=e("VU/8")(H,M,!1,function(t){e("3fZm")},"data-v-099903f3",null).exports,V={data:function(){return{ratings:[],desc:{all:"全部",positive:"满意",negative:"不满意"},onlyContent:!1,selectType:2}},methods:{select1:function(t){this.selectType=t},toggleContent:function(){this.onlyContent=!this.onlyContent},showRating:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)}},components:{BaseStar:d,BaseSpilt:T,SelectRatings:k},props:{seller:{type:Object,default:function(){return{}}}},filters:{formatDate:function(t){return z(new Date(t),"yyyy-MM-dd hh-mm-ss")}},created:function(){var t=this;_.a.get("https://easy-mock.com/mock/5b3ebebe04502462c6feb5bb/ysl2/ratings").then(function(s){0===s.data.errno&&(t.ratings=s.data.data,t.$nextTick(function(){t.scroll=new y.a(t.$refs.ratings,{click:!0})}))})}},O={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratings",staticClass:"ratings"},[e("div",{staticClass:"rating-content"},[e("div",{staticClass:"grade"},[e("div",{staticClass:"comprehensive border-1px"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"text"},[t._v("综合评分")]),t._v(" "),e("p",{staticClass:"rankRate"},[t._v("高于周边商家"+t._s(t.seller.rankRate))])]),t._v(" "),e("div",{staticClass:"items"},[e("div",{staticClass:"serviceScore"},[t._v("服务态度\n          "),e("div",{staticClass:"star-wrapper"},[e("BaseStar",{attrs:{score:4.1,size:36}})],1),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])]),t._v(" "),e("div",{staticClass:"foodScore"},[t._v("商品评分\n          "),e("div",{staticClass:"star-wrapper"},[e("BaseStar",{attrs:{score:4.3,size:36}})],1),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])]),t._v(" "),e("p",{staticClass:"deliveryTime"},[t._v("\n          送达时间"),e("span",{staticClass:"time"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("BaseSpilt"),t._v(" "),e("SelectRatings",{attrs:{ratings:t.ratings,desc:t.desc,onlyContent:t.onlyContent,selectType:t.selectType},on:{custom:t.select1,toggle:t.toggleContent}}),t._v(" "),e("ul",t._l(t.ratings,function(s,i){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.showRating(s.rateType,s.text),expression:"showRating(rating.rateType, rating.text)"}],key:i,staticClass:"rating-item border-1px"},[e("div",{staticClass:"user"},[e("img",{staticClass:"avatar",attrs:{src:s.avatar,width:"28",height:"28"}}),t._v(" "),e("div",{staticClass:"name"},[e("span",{staticClass:"username"},[t._v(t._s(s.username))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("BaseStar",{attrs:{score:s.score,size:24}})],1)])]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))]),t._v(" "),e("div",{staticClass:"rating"},[e("p",{staticClass:"text"},[t._v(t._s(s.text))]),t._v(" "),e("div",{staticClass:"icon"},[e("i",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.ratings&&t.ratings.length,expression:"ratings && ratings.length"}],staticClass:"tags"},t._l(s.recommend,function(s,i){return e("li",{key:i,staticClass:"tag"},[t._v("\n                "+t._s(s)+"\n              ")])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.ratings||!t.ratings.length,expression:"!ratings || !ratings.length"}],staticClass:"norating"},[t._v("暂无评论。")])])])])}))],1)])},staticRenderFns:[]};var A=e("VU/8")(V,O,!1,function(t){e("iHkA")},"data-v-73f10afc",null).exports,Y=e("mvHQ"),j=e.n(Y);var Q={components:{BaseStar:d,BaseSpilt:T,BaseIcon:c},props:{seller:{type:Object,default:function(){return{}}}},data:function(){var t,s,e,i;return{love:(t=this.seller.id,s="love",e=!1,(i=window.localStorage.__seller__)&&(i=JSON.parse(i)[t])&&i[s]||e)}},computed:{loveText:function(){return this.love?"已收藏":"收藏"}},watch:{seller:function(){var t=this;this.$nextTick(function(){t._initPics(),t._initScroll()})}},methods:{toggle:function(){var t,s,e,i;this.love=!this.love,t=this.seller.id,s="love",e=this.love,(i=window.localStorage.__seller__)?(i=JSON.parse(i))[t]||(i[t]={}):(i={})[t]={},i[t][s]=e,window.localStorage.__seller__=j()(i)},_initScroll:function(){var t=this;this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new y.a(t.$refs.seller,{click:!0})})},_initPics:function(){var t=this;this.$refs.items.style.width="498px",this.$nextTick(function(){t.picScroll?t.picScroll.refresh():t.picScroll=new y.a(t.$refs.picsWrapper,{scrollX:!0,eventPassthrough:"vertical"})})}},mounted:function(){var t=this;this.$nextTick(function(){t._initPics(),t._initScroll()})}},G={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"seller",staticClass:"seller"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"header"},[e("div",{staticClass:"header-top border-1px"},[e("div",{staticClass:"left"},[e("h2",{staticClass:"title"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("BaseStar",{staticClass:"star",attrs:{score:t.seller.score,size:36}}),t._v(" "),e("span",{staticClass:"ratings num"},[t._v("("+t._s(t.seller.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"sellCount num"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1)]),t._v(" "),e("div",{staticClass:"right"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"icon-favorite love",class:{collect:t.love},on:{click:t.toggle}})]),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.loveText))])])]),t._v(" "),e("div",{staticClass:"header-bottom"},[e("div",{staticClass:"minPrice item"},[e("div",{staticClass:"title"},[t._v("起送价")]),t._v(" "),e("span",{staticClass:"common"},[t._v(t._s(t.seller.minPrice))]),t._v("元\n        ")]),t._v(" "),e("div",{staticClass:"deliveryPrice item"},[e("div",{staticClass:"title"},[t._v("配送价")]),t._v(" "),e("span",{staticClass:"common"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\n        ")]),t._v(" "),e("div",{staticClass:"time item"},[e("div",{staticClass:"title"},[t._v("平均配送时间")]),t._v(" "),e("span",{staticClass:"common"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟\n        ")])])]),t._v(" "),e("BaseSpilt"),t._v(" "),e("div",{staticClass:"seller-bulletin"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"bulletin border-1px"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("ul",t._l(t.seller.supports,function(s,i){return e("li",{key:i,staticClass:"list-item border-1px"},[e("BaseIcon",{attrs:{size:16,type:s.type,hasBg:!0}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])],1)}))]),t._v(" "),e("BaseSpilt"),t._v(" "),e("div",{staticClass:"seller-pics"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),t._v(" "),e("div",{ref:"picsWrapper",staticClass:"pics-wrapper"},[e("ul",{ref:"items",staticClass:"items"},t._l(t.seller.pics,function(t,s){return e("li",{key:s,staticClass:"pic-item"},[e("img",{attrs:{src:t,width:"120",height:"90"}})])}))])]),t._v(" "),e("BaseSpilt"),t._v(" "),e("div",{staticClass:"seller-info"},[e("h1",{staticClass:"title border-1px"},[t._v("商家信息")]),t._v(" "),e("ul",t._l(t.seller.infos,function(s,i){return e("li",{key:i,staticClass:"info-item border-1px"},[t._v(t._s(s))])}))])],1)])},staticRenderFns:[]};var K=e("VU/8")(Q,G,!1,function(t){e("aC1L")},"data-v-50676bf4",null).exports;i.a.use(w.a);var L=new w.a({routes:[{path:"/",redirect:"/goods"},{path:"/goods",component:I},{path:"/ratings",component:A},{path:"/seller",component:K}]});e("34KM");i.a.config.productionTip=!1,new i.a({el:"#app",router:L,components:{App:m},template:"<App/>"})},aC1L:function(t,s){},fDQA:function(t,s){},iHkA:function(t,s){},tbdQ:function(t,s){},yxCf:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.8b18157e0e581b72bab7.js.map
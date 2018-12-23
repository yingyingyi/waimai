<template>
  <section class="msite">
    <!--首页头部-->
    <NavHeader :title="address.name || '正在定位中...'">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </NavHeader>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys, index) in categoryArray" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(c, index) in categorys" :key="index">
              <div class="food_container">
                <img :src="'https://fuss10.elemecdn.com' + c.image_url">
              </div>
              <span>{{c.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </section>
</template>

<script>
  //从vux获取数据
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  import ShopList from '../../components/ShopList/ShopList.vue'

  export default {

    mounted () {
      // 异步获取商家列表数据(后台==>state)
      this.$store.dispatch('getShops')
      //异步获取商品列表
      this.$store.dispatch('getCategorys')
    },
     //计算属性
    computed: {
      ...mapState(['address', 'categorys']),
      //创建一个数组函数
      categoryArray () {
        const {categorys} = this
      //定义一个二维数组
        const bigArray = []
      //定义一个一维数组
        let smallArray = []

        //遍历大数组
        categorys.forEach(c =>{

            //将小数组保存到大数组中
             if (bigArray.length===0){
                 bigArray.push(smallArray)
             }
            //将元素保存到小数组中
            smallArray.push(c)
           // 小数组一旦满了，重新定义一个数组
           if (smallArray.length ===8){
                 smallArray = []
           }

        })
        return bigArray
      }
    },
     //注册属性
    components: {
      ShopList
    },
    //监视轮播图的是否完整
    watch:{
      categorys(){
        this.$nextTick(() => {
          // 创建swiper对象的时机: 列表数据显示之后
          new Swiper('.swiper-container', { // 配置对象
            loop: true, // 循环轮播
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>



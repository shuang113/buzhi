<template>
  <div class="container clearfix">
    <div class="ask-content">
        <!--社区首页内容 板块选择-->
        <div class="hd-block content-hd">
          <div class="header">版块</div>
          <ul class="module-row clearfix">
            <li class="active"><a href="/">全部帖子</a></li>
            <li v-for="(item,index) in forumlist" :key="index" v-if="index < 7">
              <router-link :to="{name: 'forum-id', params: {id: item.id}}">{{item.title}}</router-link>
            </li>
          </ul>
        </div>
        <!-- 广告 -->
        <div class="adv-bar">
          <a href="#" target="_blank">
            <img src="http://gkimg.cdn.midasjoy.com/Uploads/picture/20171111/5a06a5b4f0b43.jpg">
          </a>
        </div>
        <!--社区首页内容 帖子列表-->
        <bz-listview/>
        <!-- 推荐关注 弹窗 -->
        <!-- <div class="g-mask" v-if="isShow">
          <div class="auto-recommended">
            <span class="close" @click="isShow = !isShow"></span>
            <h3 class="title">Hi~亲爱的<span class="red-txt">常山赵子龙</span>欢迎加入步知公考社区，为您推荐如下小伙伴：</h3>
            <div class="con-list">
              <ul class="clearfix">
                <li class="recommended-item clearfix">
                  <div class="recommended-pic">
                    <img src="~static/images/default-avatar.png" alt="">
                    <span class="score score-blue">官方</span>
                  </div>
                  <div class="recommended-desc">
                    <h3>申论·花木君</h3>
                    <a class="is-recom" href="#"><i class="tick-icon gray-icon"></i>已关注</a>
                    <p class="desc-txt">简介：步知公考申论主讲老师</p>
                  </div>
                </li>
                <li class="recommended-item clearfix">
                  <div class="recommended-pic">
                    <img src="~static/images/default-avatar.png" alt="">
                    <span class="score score-blue">官方</span>
                  </div>
                  <div class="recommended-desc recommended-item-last">
                    <h3>申论·花木君<span class="pics"><img src="~assets/images/label-hmj.png" class="label"></span></h3>
                    <a class="is-recom" href="#"><i class="tick-icon gray-icon"></i>已关注</a>
                    <p class="desc-txt">简介：步知公考申论主讲老师</p>
                  </div>
                </li>
                <li class="recommended-item recommended-item-last clearfix">
                  <div class="recommended-pic">
                    <img src="~static/images/default-avatar.png" alt="">
                    <span class="score"><i class="star-icon"></i>1.6k</span>
                  </div>
                  <div class="recommended-desc">
                    <h3>申论·花木君</h3>
                    <a class="is-recom" href="#"><i class="tick-icon gray-icon"></i>已关注</a>
                    <p class="desc-txt">简介：步知公考申论主讲老师</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="auto-bottom">
              <a href="#" class="auto-recommended-btn"><i class="tick-icon white-icon"></i>确认关注  开启社区之旅</a>
            </div>
          </div>
        </div>         -->
        <!-- <div v-for="(item,index) in datalist" :key="index">
        <p>{{item.title}}</p>
        </div> -->
    </div>
    <!-- 右侧栏 -->
    <div class="ask-side">

    </div>
  </div>
</template>
<script>
import axios from "axios"
import BzListview from "~/components/common/listview"
export default {
  head: {
    title: "步知公考社区 - 最具品质的公务员考试论坛"
  },
  async asyncData ({ params }) {
    let { data } = await axios.get('http://ask.gk.buzhi.com/api?router=thread.forum')
    return { forumlist: data.data}
  },
  data() {
    return {
      isShow: true,
      forumlist: {}
    };
  },
  components: {
    BzListview,
  },
  methods: {
    _tab(index) {
      this.currentIndex = index
    }
  }
  
}
</script>
<style lang="less" scoped>
@import "~assets/style/variable.less";
.ask-content {
  float: left;
  width: 730px;
  min-height: 200px;
  .hd-block {
    margin-bottom: 20px;
    border: @border-w solid @color-gray-bd;
    border-radius: @border-w*2;
    background: @color-white;
  }
  .adv-bar {
    max-height:80px;
    margin-bottom: 20px;
    text-align: center;
    img {
      height: 100%;
    }
  }
}
.content-hd {
  position: relative;
  height: 96px;
  padding-left:108px;
  .header {
    position: absolute;
    top: 0;
    left: 0;
    width: 106px;
    border-right: @border-w solid @color-gray-bd;
    height: 100%;
    line-height: 96px;
    font-size: 18px;
    font-weight: bold;
    color: @color-gray;
    text-align: center;
  }
  .module-row {
    padding-left: 30px;
    li {
      float: left;
      width:110px;
      margin-top:12px;
      margin-right: 24px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      font-size: 14px;
      a {
        display: block;
        height:100%;
        color: @color-gray;
        border: @border-w solid #c1d6e8;
        background: #e9f4fd;
        border-radius: @border-w*2;
      }
      &.active a,
      & a:hover{
        color: @color-white;
        border-color: @color-blue;
        background: @color-blue-l;
      }
    }
  }
}
.ask-side{
  float: left;
  width: 250px;
}
.g-mask{position: fixed; top:0; bottom: 0; left: 0; right: 0; background: rgba(51,51,51,0.8); z-index: 6000;}
/*自动推荐*/
.auto-recommended{position: absolute; top: 50%; height: 534px; margin-top: -269px; left: 50%; width: 760px; padding: 0 18px; margin-left: -400px; border: 2px solid #dddddd; border-radius: 4px; background: #fff;}
.auto-recommended .title{height: 62px; line-height: 62px; font-size: 14px; color: #333;}
.auto-recommended .title .red-txt{margin: 0 4px; color: #eb4f53}
.auto-recommended .con-list{height: 420px;}
.auto-recommended .con-list .recommended-item{float: left; margin-bottom: 20px; margin-right: 20px; padding-left: 10px; padding-right: 16px; width: 214px; padding-top: 12px; height: 108px; background: #f2f2f5;}
.auto-recommended .con-list .recommended-item-last{margin-right: 0}
.auto-recommended .auto-recommended-btn{margin: 0 auto; display: block; width: 203px; height: 30px; line-height: 30px; text-align: center; border: 2px solid #c64446; border-radius: 4px; background: #eb5255; font-size: 14px; color: #fff; }
.auto-recommended .auto-recommended-btn:hover{background: #c64446}
.auto-recommended .auto-recommended-btn .white-icon{margin-right: 5px; vertical-align: middle; position: relative; top: -1px;}
.auto-recommended .tick-icon{display: inline-block; width: 14px; height: 11px; background: url(~assets/images/tick.png) no-repeat;}
.auto-recommended .white-icon{background-position: 0 -26px;}
.auto-recommended .gray-icon{background-position: 0 -13px;}
.auto-recommended .red-icon{background-position: 0 -0;}
.auto-recommended .recommended-pic{float: left; position: relative; width: 80px; height: 80px;margin-right: 10px;}
.auto-recommended .recommended-desc{float: left; width: 124px;}
.auto-recommended .recommended-pic img{width: 78px; height: 78px; border: 1px solid #d9d9d9; border-radius: 50%;}
.auto-recommended .recommended-pic .score{position: absolute; left: 50%; margin-left: -23px; bottom: -10px; width: 42px; height: 14px; line-height: 14px;text-align: center; border: 2px solid #c64446;background: #eb5255;font-size: 10px;color: #fff; border-radius: 7px;}
.auto-recommended .recommended-pic .score .star-icon{display: inline-block; background: url(~assets/images/detail-icon.png) no-repeat; width: 12px; height: 12px; background-position: 0 -90px; position: relative; top: 1px;}
.auto-recommended .recommended-pic .score-blue{background: #2996eb; border-color: #1f79bf}
.auto-recommended .recommended-desc h3{margin-top: 10px; margin-bottom: 5px; font-size: 12px; line-height: 14px; font-weight: bold; color: #333;}
.auto-recommended .recommended-desc h3 .pics{margin-left: 5px;}
.auto-recommended .recommended-desc h3 .label{height: 12px; vertical-align: middle;}
.auto-recommended .recommended-desc .is-recom{display: block;;margin-bottom: 6px; font-size: 12px; line-height: 12px; color: #666666;}
.auto-recommended .recommended-desc .is-recom .tick-icon{margin-right: 3px;}
.auto-recommended .recommended-desc .desc-txt{font-size: 12px; line-height: 16px; color: #999;}
.auto-recommended .recommended-desc .is-recom-red{color: #eb5255}
.auto-recommended .close{cursor:pointer;position: absolute;display: inline-block;background: url(~assets/images/send-icon.png) no-repeat;top: 13px;right: 13px;background-position: 0 -42px;width: 15px;height: 15px;}
</style>
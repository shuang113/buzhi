<template>
    <div class="container clearfix">
        <div class="ask-content">
            <!--社区首页内容 板块选择-->
            <bz-forum></bz-forum>
            <!-- 广告 -->
            <bz-forum-ad></bz-forum-ad>
            <!--社区首页内容 帖子列表-->
            <bz-listview :datalist="datalist" :isTabMenu="isTabMenu" @goto="gotoIndex"></bz-listview>
            <!-- 推荐关注 弹窗 -->
            <transition name="slide-bottom">
            <div class="g-mask" v-show="isShowPop">
                <div class="auto-recommended g-content">
                <span class="close" @click="isShowPop = !isShowPop"></span>
                <h3 class="title">Hi~亲爱的<span class="red-txt">用户名占位</span>欢迎加入步知公考社区，为您推荐如下小伙伴：</h3>
                <div class="con-list">
                    <ul class="clearfix">
                    <li class="recommended-item clearfix" v-for="(item,index) in recommends" :key="index">
                        <div class="recommended-pic">
                        <img :src="item.avatar">
                        <span class="score" :class="{'score-blue':item.type}" v-if="item.type">{{item.type}}</span>
                        <span class="score" v-else><i class="star-icon"></i>{{item.score}}</span>
                        </div>
                        <div class="recommended-desc">
                        <h3>{{item.nickname}}</h3>
                        <span class="is-recom" v-if="item.follow" @click="item.follow = !item.follow"><i class="tick-icon red-icon"></i>关注</span>
                        <span class="is-recom" v-else @click="item.follow = !item.follow"><i class="tick-icon gray-icon"></i>已关注</span>
                        <p class="desc-txt">简介：{{item.info}}</p>
                        </div>
                    </li>
                    </ul>
                </div>
                <div class="auto-bottom">
                    <span class="auto-recommended-btn" @click="setFollow()"><i class="tick-icon white-icon"></i>确认关注  开启社区之旅</span>
                </div>
                </div>
            </div>
            </transition>
        </div>
        <!-- 右侧栏 -->
        <bz-rightside></bz-rightside>
    </div>
</template>
<script>
import axios from "axios"
import BzForum from "~/components/common/forum"
import BzForumAd from "~/components/common/forum/ad"
import BzListview from "~/components/common/listview"
import BzRightside from "~/components/common/right-side"
import {STATUS_OK, getForumCate, getForumList, getUserInfo, getRecommends} from "~/plugins/api"
import {setToken} from "~/plugins/utils"
export default {
   head() {
    return {
      title: `步知公考社区 - 最具品质的公务员考试论坛`
    }
  },
  async asyncData({ params, error }) {
    return axios
      .all([ getForumList({ fid: "0", p: params.page || 1 })])
      .then(
        axios.spread(function(applist) {
          return {
            datalist: applist.data
          };
        })
      )
      .catch(error => console.log(error))
  },
  data() {
    return {
      headTitle:"",
      datalist:{},      //全部帖子列表数据
      isShowPop: false,  //是否显示关注弹窗
      recommends:[],    //推荐关注列表
      isTabMenu:true    //listview是否有tab菜单
    }
  },
  components: {
    BzForum,
    BzForumAd,
    BzListview,
    BzRightside
  },
  methods: {
    // _getUserInfo() {
    //   // 获取userinfo信息
    //   getUserInfo().then(res=>{
    //     if(res.status === "1"){
    //       this.userinfo = res.data
    //     }
    //   })
    // },
    _getRecommends(){
      // 获取recommends信息
      getRecommends().then(res=>{
        this.recommends = res.data
      })
    },
    // 关注用户
    setFollow(){
      // setFollow(ids).then()
      this.isShowPop = !this.isShowPop
    },
    gotoIndex(index){
      this.$router.push({path:'/index/index/p/'+index})
    }
  },
  created() {
    this.$nextTick(() => {
      // this._getUserInfo()
      this._getRecommends()
    })
  }
};
</script>
<style lang="less" scoped>
@import "~assets/style/variable.less";
@import 'https://at.alicdn.com/t/font_447799_2v7ocrx22pytlnmi.css';
.ask-wrapper{
  background: #edf0f5;
  padding-bottom: 40px;
  margin-top:20px;
}
.ask-content {
  float: left;
  width: 730px;
  min-height: 200px;
}
.ask-side {
  float: right;
  width: 250px;
}

// 弹窗
.g-mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(51, 51, 51, 0.8);
  z-index: 6000;
}
/*自动推荐*/
.auto-recommended {
  position: absolute;
  top: 50%;
  height: 534px;
  margin-top: -269px;
  left: 50%;
  width: 760px;
  padding: 0 18px;
  margin-left: -400px;
  border: 2px solid #dddddd;
  border-radius: 4px;
  background: #fff;
  .title {
    height: 62px;
    line-height: 62px;
    font-size: 14px;
    color: #333;
    .red-txt {
      margin: 0 4px;
      color: #eb4f53;
    }
  }
  .con-list {
    height: 420px;
    .recommended-item {
      float: left;
      margin-bottom: 20px;
      margin-right: 20px;
      padding-left: 10px;
      padding-right: 16px;
      width: 214px;
      padding-top: 12px;
      height: 108px;
      background: #f2f2f5;
      &:nth-child(3n+3){
        margin-right:0;
      }
    }
  }
  .auto-recommended-btn {
    cursor: pointer;
    margin: 0 auto;
    display: block;
    width: 203px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 2px solid #c64446;
    border-radius: 4px;
    background: #eb5255;
    font-size: 14px;
    color: #fff;
    &:hover {
      background: #c64446;
    }
    .white-icon {
      margin-right: 5px;
      vertical-align: middle;
      position: relative;
      top: -1px;
    }
  }
  .tick-icon {
    display: inline-block;
    width: 14px;
    height: 11px;
    background: url(~assets/images/tick.png) no-repeat;
  }
  .white-icon {
    background-position: 0 -26px;
  }
  .gray-icon {
    background-position: 0 -13px;
  }
  .red-icon {
    background-position: 0 -0;
  }
  .recommended-pic {
    float: left;
    position: relative;
    width: 80px;
    height: 80px;
    margin-right: 10px;
    img {
      width: 78px;
      height: 78px;
      border: 1px solid #d9d9d9;
      border-radius: 50%;
    }
    .score {
      position: absolute;
      left: 50%;
      margin-left: -23px;
      bottom: -10px;
      width: 42px;
      height: 14px;
      line-height: 14px;
      text-align: center;
      border: 2px solid #c64446;
      background: #eb5255;
      font-size: 10px;
      color: #fff;
      border-radius: 7px;
      .star-icon {
        display: inline-block;
        background: url(~assets/images/detail-icon.png) no-repeat;
        width: 12px;
        height: 12px;
        background-position: 0 -90px;
        position: relative;
        top: 1px;
      }
    }
    .score-blue {
      background: #2996eb;
      border-color: #1f79bf;
    }
  }
  .recommended-desc {
    float: left;
    width: 124px;
    h3 {
      margin-top: 10px;
      margin-bottom: 5px;
      font-size: 12px;
      line-height: 14px;
      font-weight: bold;
      color: #333;
      .pics {
        margin-left: 5px;
      }
      .label {
        height: 12px;
        vertical-align: middle;
      }
    }
    .is-recom {
      cursor: pointer;
      display: block;
      margin-bottom: 6px;
      font-size: 12px;
      line-height: 12px;
      color: #666666;
      .tick-icon {
        margin-right: 3px;
      }
    }
    .desc-txt {
      font-size: 12px;
      line-height: 16px;
      color: #999;
    }
    .is-recom-red {
      color: #eb5255;
    }
  }
  .close {
    cursor: pointer;
    position: absolute;
    display: inline-block;
    background: url(~assets/images/send-icon.png) no-repeat;
    top: 13px;
    right: 13px;
    background-position: 0 -42px;
    width: 15px;
    height: 15px;
  }
}
</style>
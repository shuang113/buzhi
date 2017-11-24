<template>
    <!-- 右侧边栏 头像 -->
    <div class="sider-avatar sider-item" v-show="typeof(userinfo) !== '{}'">
        <div class="avater-detail">
            <div class="avatar-header">
                <div class="avatar-pic">
                    <img :src="changeImg(userinfo.avatar)">
                </div>
                <div class="avatar-name">
                  {{userinfo.nickname}}
                  <img :src="changeImg(item.course_ico)" class="label" v-for="(item,index) in userinfo.course_name_ico" :key="index" :alt="item.course_name"/>
                </div>
                <div class="avatar-motto" v-if="userinfo.info">{{userinfo.info}}</div>
                <div class="avatar-motto" v-else>从未停止求知的脚步!</div>
            </div>
            <ul class="avatar-goods clearfix" v-show="!userinfo.prize_ico">
              <li class="goods-item" v-for="(item,index) in userinfo.prize_ico" :key="index">
                <i class="medal" :class="{'medal-7day':item.type}"></i>
              </li>
                <!-- <li class="goods-item"><i class="medal medal-7day"></i></li>
                <li class="goods-item"><i class="medal medal-30day"></i></li>
                <li class="goods-item"><i class="medal medal-60day"></i></li>
                <li class="goods-item"><i class="medal medal-120day"></i></li>
                <li class="goods-item"><i class="medal medal-100question"></i></li>
                <li class="goods-item"><i class="medal medal-200question"></i></li>
                <li class="goods-item"><i class="medal medal-300question"></i></li>
                <li class="goods-item"><i class="medal medal-fan1"></i></li>
                <li class="goods-item"><i class="medal medal-fan3"></i></li>
                <li class="goods-item"><i class="medal medal-fan5"></i></li>
                <li class="goods-item"><i class="medal medal-sword"></i></li>
                <li class="goods-item"><i class="medal medal-eye"></i></li>
                <li class="goods-item"><i class="medal medal-bulb"></i></li>
                <li class="goods-item"><i class="medal medal-ship"></i></li> -->
            </ul>
        </div>
        <div class="post-nums">
            <a href="#" class="nums-item">
                <h4 class="total">{{userinfo.posts}}</h4>
                <span class="label">发帖</span>
            </a>
            <a href="#" class="nums-item">
                <h4 class="total">{{userinfo.replay}}</h4>
                <span class="label">回帖</span>
            </a>
            <a href="#" class="nums-item">
                <h4 class="total">{{userinfo.praise}}</h4>
                <span class="label">赞同</span>
            </a>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import {STATUS_OK, getUserInfo } from "~/plugins/api"
export default {
  data () {
    return {
      signTime:"",
      userinfo:{}
    }
  },
  async asyncData({ params, error }) {
    return axios
      .all([ getUserInfo() ])
      .then(
        axios.spread(function(user) {
          return {
            userinfo: user.data
          };
        })
      )
      .catch(error => console.log(error))
  },
  methods: {
    changeImg(url){
      if(url !== undefined || url !== null){
        return '/images/default-avatar.png'
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import "~assets/style/variable.less";
.sider-item{
  margin-bottom: 20px;
  border: 2px solid #d9d9d9;
  border-radius: 4px;
  background: #fff;
}
.avater-detail {
  padding-top: 20px;
  padding-bottom: 4px;
  border-bottom: @border-w solid @color-gray-bd;
  .avatar-header {
    padding: 0 28px;
    .avatar-pic {
      margin: 0 auto;
      position: relative;
      width: 78px;
      height: 78px;
      border: @border-w solid @color-gray-bd;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 78px;
        height: 78px;
        text-align: center;
      }
    }
    .avatar-name {
      margin-top: 18px;
      margin-bottom: 12px;
      text-align: center;
      font-size: 14px;
      line-height: 14px;
      color: @color-gray-b;
      img {
        margin-left: 3px;
        height: 14px;
        vertical-align: middle;
        position: relative;
        top: -1px;
      }
    }
    .avatar-motto {
      font-size: 12px;
      line-height: 18px;
      color: @color-gray-l;
      text-align: center;
    }
  }
  .avatar-goods {
    margin-top: 6px;
    padding-left: 29px;
    .goods-item {
      float: left;
      margin-bottom: 5px;
      height: 26px;
      line-height: 26px;
      width: 32px;
      .iconfont {
        font-size: 30px;
        color: green;
      }
    }
  }
}
.medal{display: block; background: url("~assets/images/icon.png") no-repeat;}
.medal-7day{width: 24px; height: 26px;}
.medal-30day{width: 24px; height: 26px; background-position: 0 -32px;}
.medal-60day{width: 24px; height: 26px; background-position: 0 -64px;}
.medal-120day{width: 24px; height: 26px; background-position: 0 -96px;}
.medal-100question{width: 24px; height: 24px; background-position: -49px 0px;}
.medal-200question{width: 24px; height: 24px; background-position: -49px -32px;}
.medal-300question{width: 24px; height: 24px; background-position: -49px -64px;}
.medal-fan1{width: 24px; height: 22px; background-position: -98px 0px;}
.medal-fan3{width: 24px; height: 22px; background-position: -98px -32px;}
.medal-fan5{width: 24px; height: 22px; background-position: -98px -64px;}
.medal-sword{width: 21px; height: 23px; background-position: -147px 0px;}
.medal-eye{width: 21px; height: 23px; background-position: -147px -32px;}
.medal-bulb{width: 21px; height: 23px; background-position: -147px -64px;}
.medal-ship{width: 22px; height: 22px; background-position: -147px -96px;}
.dots{display: block; width: 24px; height: 22px; line-height: 22px;font-weight: bold; position: relative; top: -4px;}

.post-nums {
  padding: 10px 0;
  height: 42px;
  .nums-item {
    float: left;
    width: 80px;
    border-right: @border-w solid @color-gray-bd;
    text-align: center;
    &:last-child {
      border-right: 0 none;
    }
    .total {
      padding-top: 3px;
      font-size: 16px;
      line-height: 16px;
      font-weight: bold;
      color: @color-theme;
    }
    .label {
      font-size: 14px;
      line-height: 14px;
      color: @color-gray-l;
    }
    &:hover .label {
      color: @color-blue-l;
    }
  }
}
</style>
<template>
<section>
    <!-- 右侧边栏 头像 -->
    <div class="sider-avatar sider-item">
        <div class="avater-detail">
            <div class="avatar-header">
                <div class="avatar-pic">
                    <img :src="changeImg(user.avatar)">
                </div>
                <div class="avatar-name">
                  {{user.nickname}}
                  <img :src="changeImg(item.course_ico)" class="label" v-for="(item,index) in user.course_name_ico" :key="index" :alt="item.course_name"/>
                </div>
                <div class="avatar-motto" v-if="user.info">{{user.info}}</div>
                <div class="avatar-motto" v-else>从未停止求知的脚步!</div>
            </div>
            <ul class="avatar-goods clearfix" v-show="!user.prize_ico">
              <li class="goods-item" v-for="(item,index) in user.prize_ico" :key="index">
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
                <h4 class="total">{{user.posts}}</h4>
                <span class="label">发帖</span>
            </a>
            <a href="#" class="nums-item">
                <h4 class="total">{{user.replay}}</h4>
                <span class="label">回帖</span>
            </a>
            <a href="#" class="nums-item">
                <h4 class="total">{{user.praise}}</h4>
                <span class="label">赞同</span>
            </a>
        </div>
    </div>
    <!-- 社区首页侧栏 签到 -->
      <div class="sider-qiandao sider-item" v-if="!user.isSign">
        <span class="time">{{signTime}}</span>
        <span class="qiandao-btn" @click="goSign(user.uid)">签到</span>
      </div>
      <div class="sider-qiandao sider-qiandao-had sider-item" v-else>
        <span class="time">{{signTime}}</span>
        <br/> <span v-show="user.sign_continuity">连续</span>签到
        <span class="red" v-if="user.sign_continuity"> {{user.sign_continuity}} </span>
        <span class="red" v-else> {{user.sign_day}} </span>天
        <div class="qiandao-btn">
          <span class="strong">已签到</span>
          <a href="/sign/top">签到排行榜</a>
        </div>
        <transition name="scale-opacity">
          <div class="sign-dialog" v-show="user.isSign">+1</div>
        </transition>
      </div>

    <!-- 签到规则弹窗 -->

</section>
</template>
<script>
export default {
  data () {
    return {
      signTime:""
    }
  },
  props: {
    user: {
        type: Object,
        default:{}
    }
  },
  computed: {
    signData(){
      return this.user.sign
    }
  },
  methods: {
    goSign(uid){
      // goSign(uid).then()
      // +1动画
      this.user.isSign = !this.user.isSign
    },
    _getSignTime(){
      let date = new Date()
      this.year = date.getFullYear()
      this.month = date.getMonth() + 1
      this.date = date.getDate()
      this.day = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[date.getDay()]
      return this.signTime = this.year + "-" + this.month + "-" + this.date + " " + this.day
    },
    changeImg(url){
      if(url !== undefined || url !== null){
        return '/images/default-avatar.png'
      }
    }
  },
  created () {
    this.$nextTick(()=>{
      this._getSignTime()
    })
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
.sider-qiandao {
    position: relative;
    height: 58px;
    line-height: 58px;
    text-indent: 10px;
    color: @color-gray-l;
    font-size: 14px;
    overflow: visible;
    .qiandao-btn {
        position: absolute;
        right: -2px;
        top: -2px;
        width: 96px;
        height: 58px;
        line-height: 58px;
        text-align: center;
        border: 2px solid @color-blue;
        background: @color-blue-l;
        border-radius: 4px;
        text-indent: 0;
        font-size: 18px;
        color: @color-white;
        cursor: pointer;
        &:hover {
            background: @color-blue;
        }
    }
}
.sider-qiandao-had {
    padding: 6px 0 6px 13px;
    height: 46px;
    line-height: 24px;
    text-indent: 0;
    .red {
        color: #eb5255;
    }
    .sign-dialog{
      position: absolute;
      left:50%;
      top:0;
      font-size:14px;
      color: #eb5255;
    }
    .qiandao-btn {
        cursor: default;
        padding: 10px 0 12px;
        height: 36px;
        line-height: 14px;
        background: @color-blue;
        font-size: 14px;
        a {
            color: @color-white;
        }
        .strong {
            display: block;
            margin-bottom: 5px;
            font-size: 18px;
            line-height: 18px;
        }
    }
}
</style>
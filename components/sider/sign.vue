<template>
<div>
    <!-- 社区首页侧栏 签到 -->
      <div class="sider-qiandao" v-if="!isSign">
        <span class="time">{{signTime}}</span>
        <span class="qiandao-btn" @click="goSign()">签到</span>
      </div>
      <div class="sider-qiandao sider-qiandao-had" v-else>
        <span class="time">{{signTime}}</span>
        <br/> <span v-show="sign_continuity">连续</span>签到
        <span class="red" v-if="sign_continuity"> {{sign_continuity}} </span>
        <span class="red" v-else> {{sign_day}} </span>天
        <div class="qiandao-btn">
          <span class="strong">已签到</span>
          <a href="/sign/top">签到排行榜</a>
        </div>
        <transition name="scale-opacity">
          <!-- <div class="sign-dialog" v-show="isSign">+1</div> -->
        </transition>
      </div>
    <!-- 签到规则弹窗 -->
</div>
</template>
<script>
export default {
    data () {
        return {
            isSign:false,
            sign_continuity:false,
            sign_day:2,
            signTime:""
        }
    },
    methods: {
        goSign(){
        // goSign(uid).then()
        // +1动画
        this.isSign = !this.isSign
        },
        _getSignTime(){
        let date = new Date()
        this.year = date.getFullYear()
        this.month = date.getMonth() + 1
        this.date = date.getDate()
        this.day = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[date.getDay()]
        return this.signTime = this.year + "-" + this.month + "-" + this.date + " " + this.day
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
@import "~assets/style/mixin.less";
.sider-qiandao {
    .sider-item;
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
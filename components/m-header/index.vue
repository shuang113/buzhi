<template>
    <div class="hd-header clearfix">
        <ul class="hd-nav">
            <li class="logo"><a href="#"><img src="~static/images/public-header-logo.png" alt="步知公考"/></a></li>
            <li><a href="#">首页</a></li>
            <li @mouseenter.stop="isShowSelf= !isShowSelf" @mouseleave.stop="isShowSelf= !isShowSelf">
              <a href="#">全部老师</a>
              <transition name="drop-down">
                  <div class="nav-drop-down" v-show="isShowSelf">
                      <div class="drop-container clearfix">
                          <a href="#" class="drop-item">
                              <div class="pic-box"><img src="~assets/images/hmj-icon.png"></div>
                              <p class="name">申论·花木君</p>
                          </a>
                          <a href="#" class="drop-item">
                              <div class="pic-box"><img src="~assets/images/ly-icon.png"></div>
                              <p class="name">行测·风暴羚羊</p>
                          </a>
                          <a href="#" class="drop-item">
                              <div class="pic-box"><img src="~assets/images/bc-icon.png"></div>
                              <p class="name">面试·北楚</p>
                          </a>
                          <a href="#" class="drop-item">
                              <div class="pic-box"><img src="~assets/images/sha-icon.png"></div>
                              <p class="name">公基·沙馆长</p>
                          </a>
                      </div>
                  </div>
              </transition>
            </li>
            <li><a href="#">步知社区</a></li>
            <li><a href="#">APP下载</a></li>
        </ul>
        <div class="hd-avatar" :class="{'active':isShow }" @mouseenter="isShow =!isShow" @mouseleave="isShow =!isShow">
            <div class="avatar-img">
                <img src="~static/images/default-avatar.png">
                <span class="num-label">121</span>
            </div>
            <span class="avatar-name">秋闱长达<i class="icon-daosanjiao"></i></span>
            <transition name="drop-down">
              <ul class="avater-menu" v-show="isShow">
                  <li><a href="#" target="_blank"><i class="iconfont icon-xinxi"></i>消息系统<span>(2)</span></a></li>
                  <li><a href="#"><i class="iconfont icon-center"></i>个人中心<span></span></a></li>
                  <li><a href="#"><i class="iconfont icon-shezhi"></i>个人设置</a></li>
                  <li><a href="#"><i class="iconfont icon-logout"></i>退出登录</a></li>
              </ul>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      isShowSelf:false
    }
  },
  methods:{
  }
};
</script>

<style lang="less" scoped>
@import "~assets/style/variable.less";
@import "~assets/style/mixin.less";
.hd-header {
  padding:0 30px;
  height: 70px;
  line-height: 70px;
  background: @color-theme;
  font-size: 18px;
  color: @color-white;
  a{
    color: @color-white;
  }
}
.hd-nav{
  float: left;
  li {
    position: relative;
    float: left;
    margin:0 26px;
    &::before {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 0;
      height: 4px;
      background: @color-red-l;
      border-radius: 2px;
      transition: all 0.3s ease;
    }
    &:hover::before {
      left: 20%;
      right: 20%;
      width: 60%;
    }
  }
  .logo {
    width: 262px;
    margin:0;
    img {
      display: block;
    }
  }
}
.hd-avatar {
  position: relative;
  float: right;
  padding:0 38px 0 18px;
  color: @color-blue-t;
  font-size: @f14;
  cursor: pointer;
  &.active{
    background: @color-theme-l;
  }
  &::after{
    content:"";
    position: absolute;
    right:15px;
    top:45%;
    width:0;
    height:0;
    border-width:7px;
    border-style:solid;
    border-color: transparent;
    border-top-color:@color-blue-t;
  }
  .avatar-img {
    float: left;
    position: relative;
    margin-top: 18px;
    margin-right: 8px;
    width: 36px;
    height: 36px;
    img {
      width: 32px;
      height: 32px;
      vertical-align: top;
      border-radius: 50%;
      border: @border-w solid @color-blue-t;
      overflow: hidden;
    }
    .num-label {
      position: absolute;
      top: -8px;
      left: 20px;
      text-align:center;
      width:30px;
      height:16px;
      line-height:16px;
      border-radius: 8px;
      border: @border-w solid @color-red;
      background: @color-red-l;
      color: @color-white;
      font-size: @f12;
    }
  }
  .avatar-name {
    float: left;
    width: 56px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    position: relative;
  }
  .avater-menu {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    padding: 15px 0;
    background: @color-theme-l;
    border-radius:0 0 6px 6px;
    li{
      height: 34px;
      line-height: 34px;
      font-size: @f16;
      padding-left:16px;
      &:hover {
        background: @color-theme;
      }
    }
    .iconfont{
      font-size:@f22;
      color:@color-blue-t;
      margin-right:13px;
    }
  }
}
.nav-drop-down {
  position: fixed;
  top:70px;
  left:0;
  z-index:1;
  width: 100%;
  height:126px;
  border-top: @border-w solid @color-gray-bd;
  border-bottom: @border-w solid @color-gray-bd;
  background-color: @color-white;
  .drop-container {
    margin: 0 auto;
    width: 750px;
  }
  .drop-item {
    float: left;
    margin-right: 90px;
    padding-top: 15px;
    width: 120px;
    text-align: center;
    line-height: 24px;
    color: #666;
    font-size: 14px;
    cursor: pointer;
    &:last-child{
      margin-right:0;
    }
    .pic-box{
      width: 80px;
      height: 70px;
      margin: 0 auto;
      vertical-align: middle;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img{
      width: 50px;
      height: 50px;
      vertical-align: middle;
      transition: 0.5s;
    }
    &:hover img{
      width: 65px;
      height: 65px;
    }
    .name {
      font-size: 16px;
    }   
  }
}
</style>
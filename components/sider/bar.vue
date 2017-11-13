<template>
    <div id="elevator">
        <a href="javascript:void(0);" class="elevator-service">
            <i class="elevator-icon-service"></i>
            <span>联系客服</span>
        </a>
        <div class="item-container">
            <a href="javascript:void(0);" class="elevator-phone first-item">
                <i class="elevator-icon-phone"></i>
                <span>联系电话</span>
                <div class="elevator-layer elevator-layer-phone">400-000-5784</div>
            </a>
            <a href="javascript:void(0);" class="elevator-weixin">
                <i class="elevator-icon-weixin"></i>
                <span>官方微信</span>
                <div class="elevator-layer elevator-layer-weixin"></div>
            </a>
            <a href="javascript:void(0);" class="elevator-gotop last-item">
                <i class="elevator-icon-gotop"></i>
                <span>回到顶部</span>
            </a>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
@import '~assets/style/variable.less';
#elevator {
  position: fixed;
  right: 6px;
  bottom: 200px;
  width: 60px;
  z-index: 9;
  a {
    color: @color-white;
    font-size: 12px;
    position: relative;
    display: block;
    padding: 14px;
    width: 30px;
    height: 30px;
    line-height: 16px;
    text-align: center;
    background: @color-white;
    &:hover {
      span {
        display: block;
        color: @color-blue-ll;
      }
      i {
        display: none;
      }
      .elevator-layer-phone {
        left: -161px;
        width: 158px;
        border: @border-w/2 solid @color-gray-bd;
      }
      .elevator-layer-weixin {
        transform: scale(1);
        opacity: 1;
        max-width: none;
        display: block;
        visibility: visible;
        opacity: 1;
        filter: alpha(opacity=100);
        max-width: none;
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }
    }
    i {
      display: inline-block;
      &::after {
        display: block;
        content: "";
        background: url("~assets/images/elevator.png") no-repeat;
      }
    }
    span {
      display: none;
    }
  }
  .elevator-service {
    padding: 15px;
    background: @color-blue-ll;
    border-radius: 4px;
    &:hover {
      span {
        color: @color-white;
      }
    }
    .elevator-icon-service::after {
      background-position: 0 0;
      width: 30px;
      height: 29px;
    }
    .elevator-layer-weixin {
      transform: scale(1);
      opacity: 1;
      max-width: none;
      display: block;
      visibility: visible;
      opacity: 1;
      filter: alpha(opacity=100);
      max-width: none;
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }
  }
  .item-container {
    margin-top: 5px;
    border: @border-w/2 solid @color-gray-bd;
    border-radius: 4px;
    .first-item {
      border-bottom: 1px solid @color-gray-bg;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
    .last-item {
      border-top: 1px solid @color-gray-bg;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    .elevator-icon-phone::after {
      margin-top: 3px;
      background-position: 0 -38px;
      width: 25px;
      height: 25px;
    }
    .elevator-layer-phone {
      position: absolute;
      left: 0;
      top: -1px;
      width: 0;
      height: 58px;
      line-height: 58px;
      background: @color-white;
      text-align: center;
      font-size: 16px;
      color: @color-gray-l;
      transition: width 0.5s, left 0.5s;
      overflow: hidden;
    }
    .elevator-icon-weixin::after {
      margin-top: 3px;
      background-position: 0 -70px;
      width: 26px;
      height: 24px;
    }
    .elevator-layer-weixin {
      position: absolute;
      left: -179px;
      top: -60px;
      -webkit-transition: opacity 0.25s, transform 0.3s;
      -moz-transition: opacity 0.25s, transform 0.3s;
      transition: opacity 0.25s, transform 0.3s;
      opacity: 0;
      filter: alpha(opacity=0);
      max-width: 0;
      -webkit-transform: scale(0.01);
      -ms-transform: scale(0.01);
      transform: scale(0.01);
      -webkit-transform-origin: 100% 95%;
      -ms-transform-origin: 100% 95%;
      transform-origin: 100% 95%;
      width: 176px;
      height: 176px;
      text-align: center;
      line-height: 176px;
      background: @color-white;
      border: @border-w/2 solid @color-gray-bd;
      border-radius: 4px;
      background-image: url("~assets/images/bzgkfwh.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      img {
        width: 156px;
        height: 156px;
      }
    }
    .elevator-icon-gotop::after {
      margin-top: 8px;
      background-position: 0 -103px;
      width: 26px;
      height: 14px;
    }
  }
}
</style>
<template>
    <div class="hd-search">
        <div class="container clearfix">
            <div class="bread-crumbs">
                <a href="#" class="bread-item"><i class="iconfont icon-home"></i>社区首页</a>
                <!-- <span class="divider">&gt;</span>
                <a href="#" class="bread-item">搜索结果</a> -->
            </div>
            <div class="search-area">
                <input type="text" class="search-input" placeholder="可搜索帖子/话题/用户">
                <i class="iconfont icon-search"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
@import "~assets/style/variable.less";
.hd-search {
  height: 36px;
  line-height: 36px;
  border-top: @border-w solid @color-gray-bd;
  border-bottom: @border-w solid @color-gray-bd;
  background: @color-white;
  font-size: @f14;
}
.bread-crumbs {
  float: left;
  &:hover {
    color: @color-blue;
  }
  .bread-item {
    color: @color-gray-l;
  }
  .icon-home{
      float:left;
      font-weight:bold;
      font-size:24px;
      margin-right:5px;
  }
  .divider {
    margin: 0 -2px;
  }
}
.search-area {
  float: right;
  position: relative;
  height: 22px;
  line-height: 22px;
  margin-top: 6px;
  .search-input {
    width: 164px;
    padding-right: 38px;
    height: 22px;
    line-height: 22px;
    border: @border-w/2 solid @color-gray-bd;
    border-radius: 4px;
    text-indent: 26px;
    font-size: @f12;
    background: @color-gray-bg;
    &:focus {
      background-color: @color-white;
      border-color: @color-blue;
    }
  }
  .icon-search {
    position: absolute;
    top: 1px;
    right: 1px;
    width: 38px;
    height: 22px;
    line-height: 22px;
    text-align: center;
  }
}
</style>

<template>
    <!-- 社区首页侧栏 步知工具集 -->
    <div class="sider-tools">
        <div class="title">步知工具集</div>
        <div class="tool-con">
            <a class="tool-item tool-item-foucs" href="http://g.buzhi.com/course/user/printShow" target="_blank"><i class="icon icon-dayin"></i>打印社<span class="detail-txt">(18本公益资料)</span></a>
            <a class="tool-item" href="http://g.buzhi.com/course/user/liveShow" target="_blank"><i class="icon icon-live"></i>直播间<span class="detail-txt detail-txt-red">(花木君直播中)</span></a>
            <a class="tool-item" href="/correct"><i class="icon icon-sl"></i>申论批改<span class="detail-txt">(第12期进行中)</span></a>
        </div>
    </div>
</template>
<script>
 export default {}
</script>
<style lang="less" scoped>
@import "~assets/style/variable.less";
.sider-tools{
    padding:0 10px 10px;
    margin-bottom: 20px;
    border: 2px solid #d9d9d9;
    border-radius: 4px;
    background: #fff;
    .title{
        color: #2d3e50;
        font-size: 18px;
        font-weight: bold;
        text-indent: 10px;
        padding:5px 0 20px 0;
    }
    .tool-item {
        position: relative;
        display: block;
        margin-bottom: 8px;
        padding-left: 56px;
        height: 44px;
        line-height: 44px;
        border: 2px solid #c1d6e8;
        border-radius: 4px;
        font-size: 14px;
        color: @color-theme;
        &:hover {
            background: #e9f4fd;
            border-color: @color-blue-l;
        }
        .detail-txt {
            margin-left: 5px;
            color: #999;
        } 
    }
    .icon {
        background: url('~assets/images/sider-icon.png') no-repeat;
        position: absolute;
        left: 14px;
    }
    .icon-dayin {
        background-position: -22px 0;
        width: 25px;
        height: 24px;
        top: 11px;
    }
    .icon-live {
        background-position: -22px -32px;
        width: 26px;
        height: 26px;
        top: 7px;
    }
    .icon-sl {
        background-position: -22px -64px;
        width: 28px;
        height: 25px;
        top: 12px;
    }
}
</style>
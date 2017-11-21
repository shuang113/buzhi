<template>
    <!-- 社区首页侧栏 申论批改倒计时 -->
    <div class="sider-countdown sider-item">
        <div class="title">申论批改倒计时</div>
        <div class="countdown-con">
            <div class="countdown clearfix">
                <span class="num num-1">0</span>
                <span class="num">9</span>
                <span class="txt">时</span>
                <span class="num num-1">0</span>
                <span class="num">9</span>
                <span class="txt">分</span>
                <span class="num num-1">0</span>
                <span class="num">9</span>
                <span class="txt">秒</span>
            </div>
        </div>
        <p class="had-num">批改名额： 15</p>
        <a href="#" class="countdown-btn countdown-btn-can">申请作答</a>
    </div>

</template>
<script>
 export default {}
</script>
<style lang="less" scoped>
@import "~assets/style/variable.less";
.sider-countdown {
    padding:0 10px 24px;
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
    .countdown {
        position: relative;
        left: 6px;
        margin-top: 4px;
        margin-bottom: 25px;
        color: @color-theme;
        font-weight: bold;
        .num {
            float: left;
            width: 24px;
            height: 24px;
            text-align: center;
            line-height: 24px;
            border: 1px solid #d9d9d9;
            background: #f3f3f3;
            font-size: 20px;
        }
        .num-1 {
            border-right: none;
        }
        .txt {
            float: left;
            width: 24px;
            text-align: center;
            padding-top: 8px;
            font-size: 14px;
            height: 16px;
        }
    }
    .had-num {
        margin-bottom: 14px;
        font-size: 14px;
        color: #666;
        text-indent:10px;
    }
    .countdown-btn {
        display: block;
        margin: 0 auto;
        width: 202px;
        text-align: center;
        height: 42px;
        line-height: 42px;
        border: 2px solid #aeaeae;
        background: #eaeaea;
        font-size: 16px;
        color: #aeaeae;
        border-radius: 4px;
    }
    .countdown-btn-can {
        background: #eb5255;
        border-color: #c64446;
        color: @color-white;
    }
}
</style>
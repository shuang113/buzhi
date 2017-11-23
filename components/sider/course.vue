<template>
    <!-- 社区首页侧栏 大咖课程 -->
    <div class="sider-channel sider-item" >
        <div class="sider-time">
            <i class="iconfont icon-shizhong"></i>
            {{examCount.message}}
            <span class="time-box">{{examCount.a}}</span>
            <span class="time-box">{{examCount.b}}</span>
            <span class="time-m">天</span>
        </div>
        <div class="title">大咖课程</div>
        <div class="channel-item">
            <div class="channel-img">
                <img src="~assets/images/hmj.png"/>
            </div>
            <div class="channel-desc">
                <h3 class="name">花木君-主讲申论<img src="~assets/images/label-hmj.png"></h3>
                <a href="#" class="buy-btn">立即购买</a>
            </div>
        </div>
        <div class="channel-item">
            <div class="channel-img">
                <img src="~assets/images/ly.png"/>
            </div>
            <div class="channel-desc">
                <h3 class="name">风暴羚羊-主讲行测<img src="~assets/images/label-ly.png"></h3>
                <a href="#" class="buy-btn">立即购买</a>
            </div>
        </div>
        <div class="channel-item">
            <div class="channel-img">
                <img src="~assets/images/bc.png"/>
            </div>
            <div class="channel-desc">
                <h3 class="name">北楚-主讲面试<img src="~assets/images/label-bc.png"></h3>
                <a href="#" class="buy-btn">立即购买</a>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import {STATUS_OK, examCountTips} from "~/plugins/api"
export default {
    data () {
        return {
            examCount:{}
        }
    },
    methods: {
        _getExamCountTips(){
            // 获取考试倒计时信息
            examCountTips().then(res=>{
                let day=res.data.day
                let exam={}
                exam.message=res.data.message
                exam.a=day.substring(0,1)
                exam.b=day.substring(1,2)
                this.examCount = exam
            })
        }
    },
    created () {
      this._getExamCountTips()
    }
}
</script>
<style lang="less" scoped>
@import "~assets/style/variable.less";
.sider-channel{
    padding:0 10px 10px;
    margin-bottom: 20px;
    border: 2px solid #d9d9d9;
    border-radius: 4px;
    background: #fff;
    .title {
        padding: 5px 0 20px 0;
    }
    .sider-time {
        border-bottom: 1px dashed #ddd;
        margin-top: 15px;
        font-size: 16px;
        color: @color-gray-l;
        margin-left: 10px;
        margin-right: 10px;
        padding-bottom: 12px;
        .iconfont {
            font-size:@f22;
            font-weight:bold;
            margin-right: 10px;
            vertical-align:middle;
        }
        .time-box {
            background: #f3f3f3;
            border: 1px solid #d9d9d9;
            position: relative;
            top: -2px;
            display: inline-block;
            font-size: 20px;
            height: 24px;
            line-height: 24px;
            text-align: center;
            width: 24px;
            color: @color-red-l;
            font-size: 20px;
            vertical-align: middle;
            font-weight:bold;
        }
        .time-m {
            margin-left: 5px;
        }
    }
}
.channel-item {
    position: relative;
    margin-bottom: 8px;
    margin-left: 9px;
    .channel-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 52px;
        img {
            width: 40px;
        }
    }
    .channel-desc {
        padding-left: 52px;
        .name{
            margin-bottom: 4px;
            color: #333;
            font-size: 14px;
            line-height: 18px;
            height: 18px;
            img {
                margin-left: 4px;
                vertical-align: middle;
                height: 15px;
                position: relative;
                top: -1px;
            }
        }
        .buy-btn {
            display: block;
            width: 64px;
            height: 16px;
            line-height: 16px;
            text-align: center;
            border: 2px solid @color-blue-l;
            border-radius: 4px;
            font-size: 12px;
            color: @color-blue-l;
            &:hover {
                background: @color-blue-l;
                color: @color-white;
            }
        }
    }
}
</style>
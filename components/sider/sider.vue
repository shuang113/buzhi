<template>
<div class="m-sider">
    <!-- 右侧边栏 头像 -->
    <div class="sider-avatar sider-item">
        <div class="avater-detail">
            <div class="avatar-header">
                <div class="avatar-pic">
                    <img src="~static/images/default-avatar.png">
                </div>
                <div class="avatar-name">常山赵子龙<img src="~assets/images/label-hmj.png" class="label"><img src="~assets/images/label-ly.png" class="label"><img src="~assets/images/label-bc.png" class="label"></div>
                <div class="avatar-motto">今夜闻君琵琶语，如听仙乐耳暂明,莫辞更坐弹一曲</div>
            </div>
            <ul class="avatar-goods clearfix">
                <li class="goods-item"><i class="iconfont icon-seven"></i></li>
                <li class="goods-item"><i class="iconfont icon-seven"></i></li>
            </ul>
        </div>
        <div class="post-nums">
            <a href="#" class="nums-item">
                <h4 class="total">108</h4>
                <span class="label">发帖</span>
            </a>
            <a href="#" class="nums-item">
                <h4 class="total">329</h4>
                <span class="label">回帖</span>
            </a>
            <a href="#" class="nums-item">
                <h4 class="total">82</h4>
                <span class="label">赞同</span>
            </a>
        </div>
    </div>

    <!-- 社区首页侧栏 签到 -->
    <div class="sider-qiandao sider-item">2017-03-14 星期二<a href="#" class="qiandao-btn">签到</a></div>
    <div class="sider-qiandao sider-qiandao-had sider-item">2017-03-14 星期二<br>连续签到<span class="red"> 8 </span>天<div class="qiandao-btn"><span class="strong">已签到</span><a href="#">查看签到规则</a></div></div>

    <!-- 社区首页侧栏 大咖课程 -->
    <div class="sider-channel sider-item" >
        <div class="sider-time">
            <i class="iconfont icon-shizhong"></i>国考倒计时:
            <span class="time-box">4</span><span class="time-box">5</span><span class="time-m">天</span>
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

    <!-- 社区首页侧栏 步知工具集 -->
    <div class="sider-tools sider-item">
        <div class="title">步知工具集</div>
        <div class="tool-con">
            <a class="tool-item tool-item-foucs" href="#"><i class="icon icon-dayin"></i>打印社<span class="detail-txt">(18本公益资料)</span></a>
            <a class="tool-item" href="#"><i class="icon icon-live"></i>直播间<span class="detail-txt detail-txt-red">(花木君直播中)</span></a>
            <a class="tool-item" href="/correct"><i class="icon icon-sl"></i>申论批改<span class="detail-txt">(第12期进行中)</span></a>
        </div>
    </div>

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
    <!-- 社区首页侧栏 热门话题 -->
    <div class="sider-topic sider-item">
        <div class="title">热门话题</div>
        <ul class="topic-con">
            <li class="topic-item"><a href="#">#省考成绩#</a></li>
            <li class="topic-item"><a href="#">#省考成绩#</a></li>
            <li class="topic-item"><a href="#">#省考成绩#</a></li>
            <li class="topic-item"><a href="#">#省考成绩#</a></li>
            <li class="topic-item"><a href="#">#省考成绩#</a></li>
            <li class="topic-item"><a href="#">#省考成绩#</a></li>
            <li class="topic-item"><a href="#">#省考成绩#</a></li>
            <li class="topic-item"><a href="#">#省考成绩#</a></li>
        </ul>
    </div>
    <!-- 社区首页侧栏 文章推荐选项卡 -->
    <div class="sider-article sider-item">
        <div class="tab-title">
            <ul>
                <li class="tab-title-item" 
                    v-for="(item,index) in tabs" 
                    :key="index" 
                    :class="{active:currentIndex === index}"
                    @click.stop="tab(index)"><a href="javascript:void(0);">{{item}}</a>
                </li>            
            </ul>
        </div>
        <div class="tab-article-con" style="overflow:hidden;">
            <ul class="clearfix tab-container">
                <!-- <transition-group name="slide-top"> -->
                <li class="tab-article-item">
                    <ul class="tab-article-container">
                        <li class="article-detail">
                        <a href="#">
                            <h3><i class="point"></i>111111111111111130天冲刺申论这样学！</h3>
                            <p>70分+比较靠谱—换个角度来讲申论70+，才有希望和可能上岸</p>
                        </a>
                        </li>
                        <li class="article-detail">
                        <a href="#">
                            <h3><i class="point"></i>30天冲刺申论这样学！</h3>
                            <p>70分+比较靠谱—换个角度来讲申论70+，才有希望和可能上岸</p>
                        </a>
                        </li>
                        <li class="article-detail">
                        <a href="#">
                            <h3><i class="point"></i>30天冲刺申论这样学！</h3>
                            <p>70分+比较靠谱—换个角度来讲申论70+，才有希望和可能上岸</p>
                        </a>
                        </li>
                    </ul>
                </li>
                <li class="tab-article-item">
                    <ul class="tab-article-container">
                        <li class="article-detail">
                        <a href="#">
                            <h3><i class="point"></i>3333330天冲刺申论这样学！</h3>
                            <p>70分+比较靠谱—换个角度来讲申论70+，才有希望和可能上岸</p>
                        </a>
                        </li>
                        <li class="article-detail">
                        <a href="#">
                            <h3><i class="point"></i>30天冲刺申论这样学！</h3>
                            <p>70分+比较靠谱—换个角度来讲申论70+，才有希望和可能上岸</p>
                        </a>
                        </li>
                        <li class="article-detail">
                        <a href="#">
                            <h3><i class="point"></i>30天冲刺申论这样学！</h3>
                            <p>70分+比较靠谱—换个角度来讲申论70+，才有希望和可能上岸</p>
                        </a>
                        </li>
                    </ul>
                </li>
                <!-- </transiton-group> -->
            </ul>
        </div>
    </div>
    
</div>
</template>
<script>
export default {
    data(){
        return{
            currentIndex:0,
            tabs:["推荐好文","鱼塘","上岸分享"]
        }
    },
    methods:{
        tab(index){
            this.currentIndex = index
        }
    }
}
</script>
<style lang="less" scoped>
@import "~assets/style/variable.less";
@import "~assets/style/mixin.less";
.m-sider{
    float: right;
    width: 250px;
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
                text-align:center;
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
            line-height:26px;
            width: 32px;
            .iconfont{
                font-size:30px;
                color:green;
            }
        }
    }
}
.post-nums {
    padding: 10px 0;
    height: 42px;
    .nums-item {
        float: left;
        width: 80px;
        border-right:@border-w solid @color-gray-bd;
        text-align: center;
        &:last-child{
            border-right:0 none;
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
    .qiandao-btn {
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
.sider-channel{
    padding:0 10px 10px;
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
.sider-tools{
    padding:0 10px 10px;
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
.sider-countdown {
    padding:0 10px 24px;
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
.sider-topic {
    padding:0 10px 6px;
    .title{
        padding-top:5px;
    }
    .topic-con {
        padding-left: 12px;
    }
    .topic-item {
    margin-bottom: 14px;
    font-size: 14px;
    line-height: 14px;
    color: #666;
    }
}



/*社区首页侧栏 文章推荐选项卡*/
.tab-title {
    padding: 4px 0;
    height: 32px;
    line-height: 32px;
    border-bottom: 2px solid @color-gray-bd;
    .tab-title-item {
        float: left;
        width: 80px;
        text-align: center;
        font-size: 14px;
        color: #333;
        position:relative;
        &:after{
            content:'';
            position: absolute;
            right:0;
            top:0;
            height: 32px;
            width: 2px;
            background-color:@color-gray-bg;
        }
        &:last-child:after{
            width:0;
        }
        a{
            display: block;
            &:hover{
                font-weight: bold;
                color: @color-blue;
            }

        }
        &.active {
            font-weight: bold;
            color: @color-blue;
            a {
                font-weight: bold;
                color: @color-blue;
            }
        }
    }
}
.tab-article-con {
    overflow: hidden;
    .tab-container {
        position: relative;
        width: 738px;
    }
    .tab-article-item {
        float: left;
        width: 246px;
    } 
    .tab-article-container {
        padding: 10px 10px 20px;
        .article-detail {
            padding: 9px 13px;
            border-bottom: 1px solid #d9d9d9;
            position: relative;
            &:last-child {
                border-bottom: none;
                border-color: @color-white;
            }
            a {
                display: block;
                font-size: 14px;
                line-height: 14px;
                &:hover {
                    color: #333;
                    h3{
                        font-weight: bold;
                        color: #333;
                        width: 200px;
                    }
                    p {
                        color: #333;
                    }
                }

            }  
            h3{
                margin-bottom: 8px;
                padding-left: 12px;
                color: #333;
                width: 200px;
            }          
            .point {
                background: url('~assets/images/sider-icon.png') no-repeat -102px 0;
                position: absolute;
                width: 10px;
                height: 10px;
                top: 10px;
                left: 10px;
            }
            p {
            line-height: 20px;
            font-size: 13px;
            color: @color-gray-l;
            font-weight: normal;
            }




        }


    }    

}
</style>
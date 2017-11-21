<template>
    <!-- 社区首页侧栏 文章推荐选项卡 -->
    <div class="sider-article">
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
                <!-- <transition-group name="slide-right"> -->
                <li class="tab-article-item">
                    <ul class="tab-article-container">
                        <li class="article-detail">
                        <a href="#">
                            <h3><i class="point"></i>111111111111111130天冲刺申论这样学！</h3>
                            <p>70分+比较靠谱—换个角度来讲申论70+，才有希望和可能上岸</p>
                        </a>
                        </li>
                    </ul>
                </li>
                <!-- </transiton-group> -->
            </ul>
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
.sider-article{
    margin-bottom: 20px;
    border: 2px solid #d9d9d9;
    border-radius: 4px;
    background: #fff;
}
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
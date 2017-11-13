<template>
    <div class="fd">
        <div class="fd-container">
            <p class="copyright">Copyright © 长沙麦都网络科技有限公司版权所有 2017</p>
            <span>湘ICP备13008748号-4</span>
            <a href="http://www.buzhi.com/uploads/allimg/151028/1_1353473731.jpg" target="_blank">电子公告服务网信办批文（湖南省）</a>
            <em>|</em>
            <a href="http://www.buzhi.com/uploads/allimg/151028/1_1353475622.jpg" target="_blank">电子公告服务市网信办批文（长沙市）</a>
            <em>|</em>增值电信业务经营许可证：湘B2-20150109	
            <p class="img"><img src="~assets/images/beian.png"></p>
        </div>
    </div>
</template>
<script>
 export default {}
</script>
<style lang="less" scoped>
@import '~assets/style/variable.less';
.fd{
    background:@color-gray;
    padding:27px 0 21px 0;
    .fd-container{
        text-align:center;
        color:@color-gray-l;
    }
    a{
        display:inline-block;
        color:@color-gray-l;
        &:hover{
            color:@color-red;
        }
    }
    span{
        margin-right:28px;
    }
    em{
        margin:0 14px;
    }
    .img{
        margin-top:21px;
    }
    .copyright{
        margin-bottom:23px;
    }
}
</style>
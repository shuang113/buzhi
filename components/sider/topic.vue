<template>
    <!-- 社区首页侧栏 热门话题 -->
    <div class="sider-topic">
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
</template>
<script>
 export default {}
</script>
<style lang="less" scoped>
@import "~assets/style/mixin.less";
.sider-topic {
    .sider-item;
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
</style>
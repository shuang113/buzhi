<template>
<div class="ask-side">
    <bz-userinfo></bz-userinfo>
    <bz-sign></bz-sign>
    <bz-course></bz-course>
    <bz-tools></bz-tools>
    <bz-correct></bz-correct>
    <bz-topic></bz-topic>
    <bz-read-more></bz-read-more>
</div>
</template>
<script>
import BzUserinfo from "~/components/sider/userinfo"
import BzSign from "~/components/sider/sign"
import BzCourse from "~/components/sider/course"
import BzTools from "~/components/sider/tools"
import BzCorrect from "~/components/sider/correct"
import BzTopic from "~/components/sider/topic"
import BzReadMore from "~/components/sider/readmore"

export default {
    components: {
        BzUserinfo,
        BzSign,
        BzCourse,
        BzTools,
        BzCorrect,
        BzTopic,
        BzReadMore
    }
}
</script>
<style lang="less" scoped>
</style>
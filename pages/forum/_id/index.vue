<template>
    <div>版块 <a href="/thread">文章列表{{id}}</a></div>
</template>
<script>
 export default {
    data () {
        return {
            id: this.$route.params.id
        }
    }
 }
</script>
<style lang="less" scoped>
</style>
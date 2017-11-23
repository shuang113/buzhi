<template>
<div>用户 {{uid}}</div>
</template>
<script>
 export default {
     data () {
         return {
            uid:this.$route.params.uid
         }
     }
 }
</script>
<style lang="less" scoped>
</style>
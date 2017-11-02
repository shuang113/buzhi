<template>
  <div>
      <m-header/>
      <div class="ask-wrapper">
        <div class="container clearfix">
          <nuxt/>
          <my-sider/>
        </div>
      </div>
      <m-footer/>
      <m-side-bar/>
  </div>
</template>
<script>
import MHeader from '~/components/m-header'
import MFooter from '~/components/m-footer'
import MSideBar from '~/components/m-sider/bar'
export default {
  components:{
    MHeader,
    MFooter,
    MSideBar
  }
}
</script>

<style lang="less">
@import '~assets/style/base.less';
.ask-wrapper{
  background: #edf0f5;
  padding-bottom: 40px;
  .container{
    margin-top:20px;
  }
}
</style>
